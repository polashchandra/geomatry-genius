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

}
//Rectangle
function Rectangle(){
    const RectangleInput=inputflid('inputwI1')
    const RectangleInput2=inputflid('inputwI2')
    const total=RectangleInput*RectangleInput2;
    tootalficed('wi-ariya1',total)
}
//paraparallelogram
function paralelogram(){
    const parainput=inputflid('inputpara');
    const perainput2=inputflid('inputpara2');
    const total= parainput *perainput2;
    tootalficed('wi-ariya2',total)
}
//Rhombus
function Rhombus(){
    const Rhombus=inputflid('rhombusinput')
    const Rhombus2=inputflid('rhombusinput2')
    const total=0.5*Rhombus*Rhombus2;
    tootalficed('rhombus-ariya',total)
}
//pentagon
 function pentagon(){
    const penteninput=inputflid('pentagon1')
    const pentagoninput2=inputflid('pentagon2')
    const total = 0.5*penteninput*pentagoninput2;
    tootalficed('pentagon-ariya',total)
 }
 //ellipse
 function ellipse(){
    const ellipseInput=inputflid('ellipse-input1');
    const ellipseInput2=inputflid('ellipse-input2');
    const total=3.14*ellipseInput*ellipseInput2
    tootalficed('ellipse-ariya',total)
 }