function Message(message, date)
{
    this.getText = function(){
        return message;
    };
    
    this.setText = function(_text){
        message = _text;
    };
    
    this.getDate = function(){
        return date;
    };
        this.setDate = function(_date){
            date = _date;
        };
        
    this.getFormattedDate = function()
    {
        
        var Hour = this.getDate().getHours();
        var Minutes = this.getDate().getMinutes();
        var Seconds = this.getDate().getSeconds();
        var Day = this.getDate().getDate();
        var Month = this.getDate().getMonth()+1;
        var Year = this.getDate().getFullYear();
       
    if (Minutes < 10)
    {
    Minutes = "0"+Minutes; 
    }
    if (Seconds < 10)
    {
    Seconds = "0"+Seconds; 
    }
    if (Day < 10)
    {
        Day = "0"+Day;
    }
    if (Hour < 10)
    {
        Hour = "0"+Hour;
    }
        
        return "Meddelandet skapades: "+Year+"-"+Month+"-"+Day+"  "+Hour+":"+Minutes+":"+Seconds;
    };
}

Message.prototype.toString = function(){
    return this.getText()+" ("+this.getDate()+")";
};
Message.prototype.getHTMLText = function(){
    return this.getText().replace(/[\n\r]/g, "<br />");
    
};
Message.prototype.getDateText = function(){

        var Hour = this.getDate().getHours();
var Minutes = this.getDate().getMinutes();
var Seconds = this.getDate().getSeconds();
if (Minutes < 10)
{
Minutes = "0"+Minutes; 
}
if (Seconds < 10)
{
Seconds = "0"+Seconds; 
}

return +Hour+":"+Minutes+":"+Seconds;



    
};



