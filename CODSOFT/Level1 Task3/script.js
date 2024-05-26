let ans = document.getElementById('frame');
function clearof() 
{
    ans.innerText = '0';
}
function append(value)
{
    if(value === '^') f=1;
    if (ans.innerText === '0' && value !== '.') 
    {
        ans.innerText = value;
    } 
    else
    {
       ans.innerText += value;
    }
}
function result()
{
    var f=ans.innerText.indexOf("^");
    if(f !== -1)
    {
        ans.innerText=ans.innerText.replace("^","**");
    } 
    try
    {
        var r=eval(ans.innerText);
        ans.innerText=r;
    }
    catch
    {
        ans.innerText="Error";
    }
}
function ldelete()
{
    ans.innerText=ans.innerText.slice(0,-1);
}