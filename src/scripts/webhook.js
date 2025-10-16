export const enviarParaWebhook = async (dados) => {
  const dominio = ['n8n', 'expotendas', 'com', 'br'].join('.');
  const caminho = ['webhook', '2b89c47e-5cb8-41ff-8f37-0befb3458660'].join('/');
  const url = `https://${dominio}/${caminho}`;

  const opcoes = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  };

  return await fetch(url, opcoes);
};