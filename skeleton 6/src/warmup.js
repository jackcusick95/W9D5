
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    let p = document.createElement("p");
    p.text = string;
    htmlElement.append(p);
};

htmlGenerator('Party Time.', partyHeader);