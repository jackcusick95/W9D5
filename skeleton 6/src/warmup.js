
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => { 
    const pChildren = htmlElement.getElementsByTagName("p");
    if (pChildren.length) {
        for(let p of pChildren) { // could also set pChildren with Array.from to do forEach
            htmlElement.removeChild(p);
        }
    }
    const p = document.createElement("p");
    p.textContent = string;
    htmlElement.appendChild(p);
};

htmlGenerator('Party Time.', partyHeader);