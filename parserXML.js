const xhr = new XMLHttpRequest();
xhr.open('GET', 'Contact.xml', true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const xmlString = xhr.responseText;

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

    const address = xmlDoc.querySelector('address line1').textContent;
    const phone = xmlDoc.querySelector('phone').textContent;
    const email = xmlDoc.querySelector('email').textContent;

    const html = `
      <div class="txt_desc">
        <h1 class="cont">Наши контакты:</h1>
        <p>Адрес: ${address}</p>
        <p>Номер телефона: ${phone}</p>
        <p>Email: ${email}</p>
      </div>
    `;

    document.querySelector('section.txt').innerHTML = html
  }
};
xhr.send();
