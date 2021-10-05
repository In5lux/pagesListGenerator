const invent = document.querySelector('.inventory');
const startPage = document.querySelector('.start-page');
const inputText = document.querySelector('.input-text');
const start = document.querySelector('.start-btn');

start.addEventListener('click',()=>pagesListGenerator(inputText.value,startPage.value));


function pagesListGenerator(text,startPage){
  invent.innerHTML='<tr><th>№ п/п</th><th>Наименование</th><th>Кол-во стр.</th><th>№ стр.</th></tr>';
  startPage && !isNaN(parseInt(startPage)) ? startPage=+startPage: startPage=1;
  let data = text.trim().split('\n').map(textItem=>textItem.split('\t'));
  data.map(function (item){
    item.push(`c ${startPage} по ${+item[1]+startPage-1}`);
    startPage+=+item[1];   
  }
  );
  
  for (let i= 0; i<data.length;i++){
    if (data[i][0]&&data[i][1]&&data[i][2]){
    let doc = document.createElement('tr');
    doc.innerHTML=`<td>${i+1}</td><td>${data[i][0]}</td><td>${data[i][1]}</td><td>${data[i][2]}</td>`;
    invent.appendChild(doc);
  }
}  
  return data
}
