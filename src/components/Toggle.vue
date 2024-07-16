<template>
    <div class="container">
        <img :src="getImageUrl(sunImageSrc)" alt="">
        <div class="toggle-container">
            <input type="checkbox" id="toggle" class="toggle-input" v-model="isToggled">
            <label for="toggle" class="toggle-label"></label>
        </div>
        <img :src="getImageUrl(moonImageSrc)" alt="">
    </div>
</template>


<script lang="ts">

// Import the quiz store to access quiz data
import { useQuizStore } from '../stores/quizstore';

export default {
    name: 'Toggle',
    data() {
        return {
            quizStore: useQuizStore(),
        };
    },
    computed: {
        isToggled: {
            get() {
                return this.quizStore.toggled;
            },
            set() {
                this.quizStore.toggleTheme();
            },
        },

        moonImageSrc(): string {
            return this.isToggled ? 'icon-moon-light.svg' : 'icon-moon-dark.svg';
        },
        sunImageSrc(): string {
            return this.isToggled ? 'icon-sun-light.svg' : 'icon-sun-dark.svg';
        },
    },

    methods: {
        getImageUrl(name: string): string {
            return new URL(`../assets/images/${name}`, import.meta.url).href;
        }
    },
}
</script>

<style scoped>
.container {
    display: flex;
    align-items: center;
    width: fit-content;
    gap: 8px;
    z-index: 20;


    /* Medium screens (md): 768px */
    @media (min-width: 768px) {
        display: flex;
        align-items: center;
        width: fit-content;
        gap: 16px;
    }
}

img {
    width: 20px;
    height: 20px;

    /* Medium screens (md): 768px */
    @media (min-width: 768px) {
        width: 24px;
        height: 24px;
    }
}

.toggle-container {
    position: relative;
    width: 48px;
    height: 24px;
    z-index: 20;
}

.toggle-input {
    opacity: 0;
    width: 0;
    height: 0;
}

.toggle-label {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #A729F5;
    border-radius: 30px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.toggle-label::before {
    content: "";
    position: absolute;
    left: 4px;
    top: 4px;
    width: 16px;
    height: 16px;
    background-color: white;
    border-radius: 50%;
    transition: transform 0.3s;

    @media (min-width: 768px) {
        width: 22px;
        height: 22px;
    }
}

.toggle-input:checked+.toggle-label {
    background-color: #A729F5;
}

.toggle-input:checked+.toggle-label::before {
    transform: translateX(24px);
}
</style>