function page(id)
{

    pId = Math.max(Math.min(5,pId + id), 1);

    document.getElementById("img").src = "img/igel" + pId + ".jpg";

}

pId = 1;