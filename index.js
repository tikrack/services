let initail = {};

function getQueryParams() {
  const searchParams = new URLSearchParams(window.location.search);
  const params = {};

  for (const [key, value] of searchParams.entries()) {
    params[key] = value;
  }

  return params;
}

initail = getQueryParams();

switch (initail.service) {
  case "TelegramSendBot":
    Fetch(
      `https://telegram-send-js2.tikrackcode.workers.dev/?token=${initail.token}&id=${initail.chat_id}&text=${initail.text}`
    );
    break;
  default:
    break;
}

async function Fetch(url) {
  let response = await fetch(url);
  let json = await response.json();

  return new Response("kookok")
}
