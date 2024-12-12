function renderFiltered(index) {
    if (index == 0) {
        currentPhoto = Imgs;
        currentDescription = Name;
        currentExplanation = Explanation;
        toggleOverlay(index);
        render(index)
    }

    if (index == 1) {
        currentPhoto = Imgs;
        currentDescription = Name;
        currentExplanation = Explanation;
        toggleOverlay(index);
        render(index)
    }

    if (index == 2) {
        currentPhoto = Imgs;
        currentDescription = Name;
        currentExplanation = Explanation;
        toggleOverlay(index);
        render(index)
    }
}







let Imgs = [
    "admiral.jpg",
    "ameisensackkaefer.jpg",
    "ampfereule.jpg",
    "blutroteheidelibelle.jpg",
    "borstigedolchwesspe.jpg",
    "fruehlingspelzbiene.jpg",
    "gefleckterschmalbock.jpg",
    "gemeinegrosspunktskorpionsfliege.jpg",
    "gewoehnlicheovalspinne.jpg",
    "glattschienigerpinselkaefer.jpg",
    "grossepechlibelle.jpg",
    "gruenestinkwanze.jpg",
    "hainschwebfliege.jpg",
    "hauhechelblaeuling.jpg",
    "heuschreckensandwespe.jpg",
    "huegelmarienkaefer.jpg",
    "hufeisenazurjungfer.jpg",
    "kaisermantel.jpg",
    "kleinerfeuerfalter.jpg",
    "kleinerrotdeckenkaefer.jpg",
    "koenigskerzenmoench.jpg",
    "listspinne.jpg",
    "moschusbock.jpg",
    "praechtigerblattkaefer.jpg",
    "schwalbenschwanz.jpg",
    "schwarzkolbigerbraundickkopffalter.jpg",
    "spanischeflagge.jpg",
    "stierkaefer.jpg",
    "streifenwanze.jpg",
    "sumpfschrecke.jpg",
    "tagpfauenauge.jpg",
    "vierbindigerschmalbock.jpg",
    "vierfleck.jpg",
    "vierzehnpunktmarienkaefer.jpg",
    "wespenspinne.jpg",
    "zweiundzwanzigpunktmarienkaefer.jpg"
    ]
    
    let photo = [
        "butterfly",
        "spider"
    ]
    
    let photosecond = [
        "bug",
        "fly"
    ]
    
    let description = [
        "asdlfj",
        "sdhfklsd"
    ]
    
    let descriptionsecond = [
        "slkdhfl",
        "ldsflasdf"
    ]
    
    
    function renderFiltered(index) {
        if (index == 1) {
            render(photo, description)
        }
    
        if (index == 2) {
            render(photosecond, descriptionsecond)
        }
    }
    
    
    function render(arrPhoto, arrDescription) {
        let contentRef = document.getElementById("content");
        contentRef.innerHTML = "";
    
        for (let index = 0; index < arrPhoto.length; index++) {
            contentRef.innerHTML += getNoteTemplate(index, arrPhoto, arrDescription);
        }
    }
    
    
    function getNoteTemplate(index, arrPhoto, arrDescription) {
        return `<div onclick="toggleOverlay(${index})" class="single_element"> 
                    <p> ${arrPhoto[index]} </p>
                    <p> ${arrDescription[index]} </p>
                </div> 
                `
    }
    
    
    function toggleOverlay(index){
        let overlayRef = document.getElementById("overlay");
    
        overlayRef.classList.toggle("d_none");
    }