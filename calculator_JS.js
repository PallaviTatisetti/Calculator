const display = document.getElementById('display');

function input(val)
{
	display.value += val;
}

function allClear()
{
	display.value="";
}
function backSpace()
{
	display.value=display.value.slice(0, -1);

}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "INVALID";
    }
}