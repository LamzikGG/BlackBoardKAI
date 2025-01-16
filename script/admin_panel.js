const app = Vue.createApp({
    data() {
        return {
            blocks: [],
            newBlock: {
                title: '',
                description: '',
                imageUrl: '',
                link: ''
            }
        }
    },
    methods: {
        addNewBlock(event) {
            this.blocks.push({...this.newBlock});
            // Очищаем форму
            this.newBlock = {
                title: '',
                description: '',
                imageUrl: '',
                link: ''
            };
            // Сохраняем в localStorage
            this.saveBlocks();
        },
        deleteBlock(index) {
            if(confirm('Вы уверены, что хотите удалить этот блок?')) {
                this.blocks.splice(index, 1);
                this.saveBlocks();
            }
        },
        editBlock(index) {
            const block = this.blocks[index];
            // Заполняем форму данными выбранного блока
            this.newBlock = {...block};
            // Удаляем старый блок
            this.blocks.splice(index, 1);
            this.saveBlocks();
        },
        saveBlocks() {
            localStorage.setItem('adminBlocks', JSON.stringify(this.blocks));
        },
        loadBlocks() {
            const savedBlocks = localStorage.getItem('adminBlocks');
            if (savedBlocks) {
                this.blocks = JSON.parse(savedBlocks);
            }
        }
    },
    mounted() {
        this.loadBlocks();
    }
}).mount('#app');