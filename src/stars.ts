import {LitElement, html, css, property} from 'lit-element';

class Stars extends LitElement {
    @property({type: Number})
    starsInAll = 5;
    
    @property({type: Number})
    stars = 4;

    @property({type: Number})
    tmpStars = 0;

    static get styles() {
        return css`
            .star {
                font-size: 35px;
                color: lightgray;
            }
            .star.selected {
                color: orange;
            }
        `;
    }

    mouseover(e : Event) {
        console.log(e);
        if (e.target == null || e.target.parentElement == null)
            return;
        this.tmpStars = this.getStarNumber(e.target.parentElement, e.target); // Typescript I fucking HATE you! >:-7
    }

    mouseout(e : Event) {
        console.log(e);
        this.tmpStars = 0;
    }

    private getStarNumber(parent: HTMLElement, star: HTMLElement) : number {
        let i = 1;
        let result = 0;
        parent?.childNodes.forEach(s => {
            if (s === star)
                result = i;
            i++;
        });
        return result;
    }

    get starsHtml() {
        const { starsInAll, stars, tmpStars } = this;
        const s = [];
        const farvedeStars = !!tmpStars ? tmpStars : stars;
        for (let i=0; i < farvedeStars; i++) {
            let x = html`<span class="star selected" @mouseover="${this.mouseover}" @mouseout="${this.mouseout}">&#9733;</span>`;
            s.push(x);
        }
        for (let i = farvedeStars; i < starsInAll; i++) {
            s.push(html`<span class="star">&#9733;</span>`);
        }
        return s;
    }

    render(){
        return html`
        <div>
            Here goes the stars: ${this.starsHtml}
        </div>
        `;
    }
}

customElements.define('foa-stars', Stars);