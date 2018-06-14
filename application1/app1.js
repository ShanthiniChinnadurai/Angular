
 function GetSelectedlanguage(language) {
    var selectedText = language.options[language.selectedIndex].innerHTML;
    var selectedValue = language.value;

if(selectedValue=="JAVA")
{
    location.replace("E:/Shanthini/ng/application1/javaques.html");
    
}
else if(selectedValue=="C")
{
    location.replace("E:/Shanthini/ng/application1/cques.html");
}
else if(selectedValue=="C++")
{
    location.replace("E:/Shanthini/ng/application1/cppques.html");
}
 }