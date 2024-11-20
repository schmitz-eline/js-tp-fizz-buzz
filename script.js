(
    function () {
        const fizzBuzzScroll = {
            olElement: document.getElementById('fizzbuzz'),
            numberOfItemsToGenerate: 50,
            currentItemNumber: 1,
            init() {
                document.documentElement.classList.add('js-enabled');
                this.end = this.currentItemNumber + this.numberOfItemsToGenerate;
                this.generateItems();
                this.addEventListeners();
            },
            generateLiItem() {
                const liElement = document.createElement('li');
                liElement.textContent = this.currentItemNumber;
                liElement.dataset.sum = this.calculateSum(this.currentItemNumber);
                liElement.addEventListener('click', (event) => {
                    this.updateCard(event);
                });
                return liElement;
            },
            generateItems() {
                for (; this.currentItemNumber <= this.end; this.currentItemNumber++) {
                    if (this.currentItemNumber % 15 === 0) {
                        this.olElement.insertAdjacentHTML('beforeend', '<li class="fizzbuzz">FI<i>zz</i>BU<i>zz</i></li>');
                    } else if (this.currentItemNumber % 5 === 0) {
                        this.olElement.insertAdjacentHTML('beforeend', '<li class="buzz">BU<i>zz</i></li>');
                    } else if (this.currentItemNumber % 3 === 0) {
                        this.olElement.insertAdjacentHTML('beforeend', '<li class="fizz">FI<i>zz</i></li>');
                    } else {
                        const liElement = this.generateLiItem();
                        this.olElement.insertAdjacentElement('beforeend', liElement);
                    }
                }
                this.end += this.numberOfItemsToGenerate;
            },
            addEventListeners() {
                window.addEventListener('scrollend', () => {
                    this.generateItems();
                });
            },
            updateCard(event) {
                console.log(event.currentTarget);
                [event.currentTarget.dataset.sum, event.currentTarget.textContent] = [event.currentTarget.textContent, event.currentTarget.dataset.sum];
            },
            calculateSum(max) {
                return (max * (max + 1) / 2);
            }
        }
        fizzBuzzScroll.init();
    }
)();