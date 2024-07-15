<template>

    <screen v-show="!showScore">
        <outertopcircle>
            <innercircle>
            </innercircle>
        </outertopcircle>
        <outercontainer>
            <titletogglecontainer>
                <titlediv>
                    <icondiv :style="{ 'backgroundColor': currentSubject.iconbg }">
                        <img style="width: 40px; height:40px" :src="getImageUrl(currentSubject.icon)" alt="">
                    </icondiv>
                    <cardtext>{{ currentSubject.title }}</cardtext>
                </titlediv>
                <Toggle></Toggle>
            </titletogglecontainer>
            <innercontainer>
                <headercontainer>
                    <headercontainerp>Question {{ currentQuestionIndex + 1 }} of {{ currentSubject.questions.length }}
                    </headercontainerp>
                    <question>{{ currentSubject.questions[currentQuestionIndex].question }}</question>
                </headercontainer>

                <cardcontainer>
                    <label v-for="(option, index) in currentSubject.questions[currentQuestionIndex].options"
                        :key="index">
                        <card :class="[
                            { 'selected': selectedOption === option },
                            { 'correct-option': isOptionCorrect(option) },
                            { 'incorrect-option': isOptionIncorrect(option) },
                            { 'isSubmitted': isSubmitted }
                        ]" @mouseover="hoveredOption = option" @mouseleave="hoveredOption = ''">
                            <input type="radio" :name="'question-' + currentQuestionIndex" :value="option"
                                v-model="selectedOption" style="display: none;" :disabled="isSubmitted">

                            <icondiv :style="getIconStyle(option)">
                                {{ getLetter(index) }}
                            </icondiv>
                            <cardtext>{{ option }}</cardtext>

                            <div style="display: flex; margin-left: auto;">
                                <icondiv v-if="isOptionCorrect(option)" style="background-color: transparent;">
                                    <img style="width: 40px; height:40px" :src="getImageUrl('icon-correct.svg')" alt="">
                                </icondiv>
                                <icondiv v-if="isOptionIncorrect(option)" style="background-color: transparent;">
                                    <img style="width: 40px; height:40px" :src="getImageUrl('icon-incorrect.svg')"
                                        alt="">
                                </icondiv>
                            </div>
                        </card>
                    </label>
                    <styledbutton v-show="showSubmitBtn" @click="submitAnswer">Submit answer</styledbutton>
                    <styledbutton v-show="showNextBtn" @click="nextQuestion">Next question</styledbutton>
                    <styledbutton v-show="showScoreBtn" @click="showQuizScore">Show score</styledbutton>
                    <span
                        style="color:#EE5454; font-weight: normal; font-size: 24px; display: flex; align-items: center;"
                        v-show="error"><img style="width: 40px; height:40px" :src="getImageUrl('icon-incorrect.svg')"
                            alt="">{{ errorMsg }}</span>
                </cardcontainer>
            </innercontainer>
        </outercontainer>
        <outerbottomcircle>
            <innercircle>
            </innercircle>
        </outerbottomcircle>
    </screen>

    <screen v-show="showScore">
        <outertopcircle>
            <innercircle>
            </innercircle>
        </outertopcircle>
        <outercontainer>
            <titletogglecontainer>
                <titlediv>
                    <icondiv :style="{ 'backgroundColor': currentSubject.iconbg }">
                        <img style="width: 40px; height:40px" :src="getImageUrl(currentSubject.icon)" alt="">
                    </icondiv>
                    <cardtext>{{ currentSubject.title }}</cardtext>
                </titlediv>
                <Toggle></Toggle>
            </titletogglecontainer>
            <innercontainer>
                <headercontainer>
                    <headercontainerh1>Quiz Completed <headercontainerspan>You scored...</headercontainerspan>
                    </headercontainerh1>
                </headercontainer>

                <cardcontainer>
                    <div
                        style="width: 600px; height: 400px; padding: 48px; display: flex; flex-direction: column; justify-content: space-between; align-items: center; background-color: white; border-radius: 24px;  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                        <titlediv>
                            <icondiv :style="{ 'backgroundColor': currentSubject.iconbg }">
                                <img style="width: 40px; height:40px" :src="getImageUrl(currentSubject.icon)" alt="">
                            </icondiv>
                            <cardtext>{{ currentSubject.title }}</cardtext>
                        </titlediv>
                        <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
                            <p style="font-size: 144px; font-weight: 500; color:#313E51;">{{ score }}</p>
                            <headercontainerp>out of {{ currentSubject.questions.length }}</headercontainerp>
                        </div>
                    </div>

                    <router-link style="width: 100%;" :to="{ name: 'home' }">
                        <styledbutton>
                            Play Again
                        </styledbutton>
                    </router-link>
                </cardcontainer>
            </innercontainer>
        </outercontainer>
        <outerbottomcircle>
            <innercircle>
            </innercircle>
        </outerbottomcircle>
    </screen>


</template>


<script lang="ts">
import { useQuizStore } from '../stores/quizstore';
import {
    outercontainer, innercontainer, card, icondiv, cardcontainer, screen, cardtext, headercontainer, headercontainerspan, headercontainerh1, headercontainerp, outertopcircle, outerbottomcircle, innercircle, titletogglecontainer, titlediv, question, styledbutton
} from '@/styled-components/styled-components';
import Toggle from '@/components/Toggle.vue'


export default {
    name: 'Quiz',
    components: {
        Toggle, outercontainer, innercontainer, card, icondiv, cardcontainer, screen, cardtext, headercontainer, headercontainerspan, headercontainerh1, headercontainerp, outertopcircle, outerbottomcircle, innercircle, titletogglecontainer, titlediv, question, styledbutton
    },
    data() {
        return {
            currentSubject: {} as any,
            currentQuestionIndex: 0,
            showNextBtn: false,
            showSubmitBtn: true,
            showScoreBtn: false,
            selectedOption: "",
            hoveredOption: "",
            errorMsg: "",
            error: false,
            showCorrectIcons: false,
            showIncorrectIcons: false,
            isSubmitted: false,
            score: 0,
            showScore: false,

        }
    },
    created() {
        const quizStore = useQuizStore();
        const subject = quizStore.subjects.find(subject => subject.title === this.$route.params.title);
        if (subject) {
            this.currentSubject = subject;
        }
    },

    methods: {
        getImageUrl(name: string) {
            return new URL(`../assets/images/${name}`, import.meta.url).href;
        },
        getLetter(index: number) {
            return String.fromCharCode(65 + index); // Convert index to ASCII (A=65, B=66, etc.)
        },
        nextQuestion() {
            this.resetState(); // Reset the state before proceeding to the next question
            if (this.currentQuestionIndex < this.currentSubject.questions.length - 1) {
                this.currentQuestionIndex++;
            }
        },
        showQuizScore() {
            this.showScore = !this.showScore;
        },
        getIconStyle(option: string) {
            const styles: Record<string, string> = {};

            if (this.hoveredOption === option) {
                styles.backgroundColor = '#F6E7FF';
                styles.color = '#A729F5';
            } else if (this.selectedOption === option) {
                styles.backgroundColor = '#A729F5';
                styles.color = 'white';
            }

            if (this.isOptionCorrect(option)) {
                styles.backgroundColor = '#26D782';
                styles.color = 'white';
            } else if (this.isOptionIncorrect(option)) {
                styles.backgroundColor = '#EE5454';
                styles.color = 'white';
            }
            return styles;
        },

        submitAnswer() {
            if (!this.selectedOption) {
                this.errorMsg = "Please select an answer"
                this.error = true;
                return
            }
            this.error = false;
            const correctAnswer = this.currentSubject.questions[this.currentQuestionIndex].answer;
            this.showSubmitBtn = false;
             if (this.currentQuestionIndex === this.currentSubject.questions.length - 1) {
                this.showScoreBtn = true;
                this.showNextBtn = false;
                this.showSubmitBtn = false;
            }else{
                this.showNextBtn = true;
            }

            if (this.selectedOption === correctAnswer) {
                this.showCorrectIcons = true;
                this.score++
            } else {
                this.showCorrectIcons = true;
                this.showIncorrectIcons = true;
            }
            this.isSubmitted = true; // Disable further selection
        },

        isOptionCorrect(option: string) {
            return this.showCorrectIcons && option === this.currentSubject.questions[this.currentQuestionIndex].answer;
        },

        isOptionIncorrect(option: string) {
            return this.showIncorrectIcons && option === this.selectedOption && option !== this.currentSubject.questions[this.currentQuestionIndex].answer;
        },
        resetState() {
            this.showNextBtn = false;
            this.showSubmitBtn = true;
            this.selectedOption = "";
            this.hoveredOption = "";
            this.errorMsg = "";
            this.error = false;
            this.showCorrectIcons = false;
            this.showIncorrectIcons = false;
            this.isSubmitted = false; // Reset isSubmitted to allow interactions
        },
    },



    computed: {
        hoverStyle() {
            return {
                color: '#A729F5',
                backgroundColor: '#F6E7FF',
            };
        },

    },
}
</script>

<style scoped>
.selected {
    border: 3px solid #A729F5;
    /* Add your desired styling */
}

.correct-option {
    border: 3px solid #26D782;
}

.incorrect-option {
    border: 3px solid #EE5454;
}

.isSubmitted {
    pointer-events: none;
}
</style>