

class Display {

    heroes = [
        {name: 'Fanny', playstyle: 'Assassin', role: 'Jungle', details: "Fanny's playstyle involves quickly dashing in and out of fights to deal damage to enemies and escape danger. She is also capable of rotating around the map quickly to assist her allies or gank enemy heroes." },

        {name: 'Tigreal', playstyle: 'Tank', role: 'Roam', details: "Tigreal is often played in the front line to initiate fights and absorb damage for his team. He has a combination of crowd control abilities and high durability, making him a formidable opponent in fights. " },

        {name: 'Miya', playstyle: 'Marksman', role: 'Gold Lane', details: " Miya excels at dealing damage from range. Her abilities include a passive that grants her increased attack speed, a piercing arrow that deals damage to multiple enemies, and an ultimate that deals heavy damage to a single target. " },

        {name: 'Eudora', playstyle: 'Mage', role: 'Mid Lane', details: "Eudora excels at burst damage and crowd control. Her abilities include a chain lightning that jumps between enemies, a passive that increases her magic power, and an ultimate that deals heavy damage and stuns enemies in an area" },

        {name: 'Alucard', playstyle: 'Fighter', role: 'Exp Lane', details: " He has a combination of physical and life steal abilities that allow him to sustain his health and deal significant damage to enemy heroes. Alucard's abilities include a dash, a multi-hit strike, and a life steal buff." }
    ];

    render(hero) {
        const modal = document.querySelector('.modal');
        let template = `
            <h1> ${this.heroes[hero].name} </h1>
            <h3> Playstyle: ${this.heroes[hero].playstyle} </h3>
            <h3> Role: ${this.heroes[hero].role} </h3>
            <p> ${this.heroes[hero].details} </p>`;

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
        const display = new Display();
        const modal = document.querySelector('.modal');
        
        container.addEventListener('click', e => {
            
            console.log(e.screenX);
            if(e.screenY > 332 && e.screenY < 448 && e.screenX > 630 && e.screenX < 760) {
                modal.classList.toggle('modal__style');
                display.render(0) //fanny
            } else if (e.screenY > 340 && e.screenY < 430 && e.screenX > 334 && e.screenX < 425) {
                modal.classList.toggle('modal__style');
                display.render(1) //tigreal
            } else if(e.screenY > 193 && e.screenY < 258 && e.screenX > 460 && e.screenX < 540) {
                modal.classList.toggle('modal__style');
                display.render(2) //miya
            } else if(e.screenY > 189 && e.screenY < 250 && e.screenX > 872 && e.screenX < 920) {
                modal.classList.toggle('modal__style');
                display.render(3) //eudora
            } else if(e.screenY > 377 && e.screenY < 473 && e.screenX > 997 && e.screenX < 1058) {
                modal.classList.toggle('modal__style');
                display.render(4) //alucard
            } else {
                modal.classList.remove('modal__style')
                modal.innerHTML = '';
            }
        })
    }
}


const obj = {
    fanny: ['assasin', 'jungle'],
    tigreal: ['tank', 'roam'],
    eudora: ['mage', 'mid']
}


const image = new Image();
image.render();


