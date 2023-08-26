function inputflid(inputId){
    const inputcapture=document.getElementById(inputId);
    const inputinnerText=inputcapture.value 
    const inputmaintext=parseFloat(inputinnerText)
    inputcapture.value=''
    return inputmaintext;

}
function tootalficed(valuset,totalans){
    const capchartotoal=document.getElementById(valuset)
    capchartotoal.innerText=totalans;
}
//Triangle
function clickhandle(){
    const witdth=inputflid('widthText')
    const height=inputflid('heighttext')
    const widthheigt=0.5*witdth*height;
    tootalficed('vh-ariya',widthheigt)
    addToCalculationEntry('trangle', widthheigt)

}
//Rectangle
function Rectangle(){
    const RectangleInput=inputflid('inputwI1')
    const RectangleInput2=inputflid('inputwI2')
    const total=RectangleInput*RectangleInput2;
    tootalficed('wi-ariya1',total)
    addToCalculationEntry('rectangle', total)
}
//paraparallelogram
function paralelogram(){
    const parainput=inputflid('inputpara');
    const perainput2=inputflid('inputpara2');
    const total= parainput *perainput2;
    tootalficed('wi-ariya2',total)
    addToCalculationEntry('paralelogram', total)
}
//Rhombus
function Rhombus(){
    const Rhombus=inputflid('rhombusinput')
    const Rhombus2=inputflid('rhombusinput2')
    const total=0.5*Rhombus*Rhombus2;
    tootalficed('rhombus-ariya',total)
    addToCalculationEntry('rhombus', total)
}
//pentagon
 function pentagon(){
    const penteninput=inputflid('pentagon1')
    const pentagoninput2=inputflid('pentagon2')
    const total = 0.5*penteninput*pentagoninput2;
    tootalficed('pentagon-ariya',total)
    addToCalculationEntry('prentent', total)
    
 }
 //ellipse
 function ellipse(){
    const ellipseInput=inputflid('ellipse-input1');
    const ellipseInput2=inputflid('ellipse-input2');
    const total=3.14*ellipseInput*ellipseInput2
    tootalficed('ellipse-ariya',total)
 }
// main ariya side
function addToCalculationEntry(areaType, area){
    console.log(areaType+ ' '  + area)
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;

    calculationEntry.appendChild(p);
}
