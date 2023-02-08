
class Display {
    constructor(name, playstyle, role, details) {
        this.name = name;
        this.playstyle = playstyle;
        this.role = role;
        this.details = details;
    }


    render() {

        const modal = document.querySelector('.modal');
        let template = `
            <h1> ${this.name} </h1>
            <h3> Playstyle: ${this.playstyle} </h3>
            <h3> Role: ${this.role} </h3>
            <p> ${this.details} </p>`;

            if(modal.classList.contains('modal__style')) {
                modal.innerHTML = template;
            } else {
                modal.innerHTML = '';
            }
        }
}



class Image {
    render() {
        const container = document.querySelector('.container');
       
        const modal = document.querySelector('.modal');
        
        container.addEventListener('click', e => {
            
            if(e.screenY > 332 && e.screenY < 448 && e.screenX > 630 && e.screenX < 760) {
                modal.classList.toggle('modal__style');
                new Display('Fanny', 'Assasin', 'Jungle', "Fanny's playstyle involves quickly dashing in and out of fights to deal damage to enemies and escape danger. She is also capable of rotating around the map quickly to assist her allies or gank enemy heroes.").render(); //fanny
            } else if (e.screenY > 340 && e.screenY < 430 && e.screenX > 334 && e.screenX < 425) {
                modal.classList.toggle('modal__style');
                new Display('Tigreal', 'Tank', 'Roam', "Tigreal is often played in the front line to initiate fights and absorb damage for his team. He has a combination of crowd control abilities and high durability, making him a formidable opponent in fights.").render(); //tigreal
            } else if(e.screenY > 193 && e.screenY < 258 && e.screenX > 460 && e.screenX < 540) {
                modal.classList.toggle('modal__style');
                new Display('Miya', 'Marksman', 'Gold Lane', " Miya excels at dealing damage from range. Her abilities include a passive that grants her increased attack speed, a piercing arrow that deals damage to multiple enemies, and an ultimate that deals heavy damage to a single target.").render(); //miya
            } else if(e.screenY > 189 && e.screenY < 250 && e.screenX > 872 && e.screenX < 920) {
                modal.classList.toggle('modal__style');
                new Display('Eudora', 'Mage', 'Mid Lane', "Eudora excels at burst damage and crowd control. Her abilities include a chain lightning that jumps between enemies, a passive that increases her magic power, and an ultimate that deals heavy damage and stuns enemies in an area.").render(); //eudora
            } else if(e.screenY > 377 && e.screenY < 473 && e.screenX > 997 && e.screenX < 1058) {
                modal.classList.toggle('modal__style');
                new Display('Alucard', 'Fighter', 'Exp Lane', "He has a combination of physical and life steal abilities that allow him to sustain his health and deal significant damage to enemy heroes. Alucard's abilities include a dash, a multi-hit strike, and a life steal buff.").render(); //alucard
            } else {
                modal.classList.remove('modal__style')
                modal.innerHTML = '';
            }
        })


    }
}

const image = new Image();
image.render();








