function load_write_ups(file) 
{
    var xhr = new XMLHttpRequest();
    document.get
    xhr.open('GET', 'write-ups/write-up_'+file+'.txt?'+Math.random(), false);
    xhr.send();

    if (xhr.status == "404") {
        location.replace("/404.html");
    } else {
        document.getElementById("content_body").innerHTML = xhr.response;
        document.getElementById("content_title").innerHTML = "";
    }
}

function load_note(file) 
{
    var xhr = new XMLHttpRequest();
    document.get
    xhr.open('GET', 'notes/note_'+file+'.txt?'+Math.random(), false);
    xhr.send();

    if (xhr.status == "404") {
        location.replace("/404.html");
    } else {
        document.getElementById("content_body").innerHTML = xhr.response;
        document.getElementById("content_title").innerHTML = "";
    }
}

function onLoad()
{
  document.getElementById("content_title").innerHTML = "<h3 class=\"h3 mb-42 text-gray-900\" style=\"margin-top: 20%;\"> <i><b>WRITE-UPS & NOTES</b></i> </h3>"
}