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
                cursor: pointer;
            }
            .star.selected {
                color: orange;
            }
        `;
    }

    mouseover(e : Event) {
        this.tmpStars = this.getStarNumber(e.target);
    }

    mouseout() {
        this.tmpStars = 0;
    }

    myClick(e : Event) {
        this.stars = this.getStarNumber(e.target);
    }

    private getStarNumber(star: HTMLElement) : number {
        let classes = star.className.split('starNumber-');
        let starNumber : string;
        if (classes[1].indexOf(' ') > 0)
            starNumber = classes[1].substr(0, classes[1].indexOf(' '));
        else
            starNumber = classes[1];
        return parseInt(starNumber, 10) + 1;
    }

    get starsHtml() {
        const { starsInAll, stars, tmpStars } = this;
        const s = [];
        const farvedeStars = !!tmpStars ? tmpStars : stars;
        for (let i=0; i < farvedeStars; i++) {
            let x = html`<span class="star starNumber-${i} selected" @mouseover="${this.mouseover}" @mouseout="${this.mouseout}" @click="${this.myClick}">&#9733;</span>`;
            s.push(x);
        }
        for (let i = farvedeStars; i < starsInAll; i++) {
            s.push(html`<span class="star starNumber-${i}" @mouseover="${this.mouseover}" @mouseout="${this.mouseout}" @click="${this.click}">&#9733;</span>`);
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