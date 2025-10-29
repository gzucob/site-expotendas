import { enviarParaWebhook } from './webhook.js';

// Gerencia envio de formulário de contato
document.addEventListener('DOMContentLoaded', () => {
  const formContato = document.getElementById('form-contato');
  const formMensagem = document.getElementById('form-mensagem');

  if (!formContato) return;

  formContato.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Coleta dados do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const departamento = document.getElementById('departamento').value;
    const mensagem = document.getElementById('mensagem').value;

    if (!nome || !email || !departamento || !mensagem) {
      mostrarMensagem('Por favor, preencha todos os campos obrigatórios.', 'erro');
      return;
    }

    // Dados para envio
    const dados = {
      nome, email, telefone, departamento, mensagem,
      data_envio: new Date().toISOString(),
      email_departamento: `${departamento}@expotendas.com.br`
    };

    mostrarMensagem('Enviando mensagem...', '');

    try {
      const resposta = await enviarParaWebhook(dados);
      if (resposta.ok) {
        formContato.reset();
        mostrarMensagem('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'sucesso');
      } else {
        mostrarMensagem('Erro ao enviar mensagem. Por favor, tente novamente mais tarde.', 'erro');
      }
    } catch (erro) {
      console.error('Erro ao enviar formulário:', erro);
      mostrarMensagem('Erro ao enviar mensagem. Por favor, tente novamente mais tarde.', 'erro');
    }
  });
  
  // Mostra mensagens na tela
  function mostrarMensagem(texto, tipo) {
    if (!formMensagem) return;

    formMensagem.textContent = texto;
    formMensagem.className = 'form-mensagem';
    if (tipo) formMensagem.classList.add(tipo);

    formMensagem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    if (tipo === 'sucesso') {
      setTimeout(() => {
        formMensagem.textContent = '';
        formMensagem.className = 'form-mensagem';
      }, 5000);
    }
  }
});