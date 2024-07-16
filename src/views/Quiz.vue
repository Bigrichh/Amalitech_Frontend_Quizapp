<template>
    <screen :class="theme">
        <!-- Top circle decoration -->
        <outertopcircle>
            <innercircle>
            </innercircle>
        </outertopcircle>

        <outercontainer><!-- Outer container for content -->
            <!-- Container for title and toggle component -->
            <titletogglecontainer>
                <titlediv>
                    <!-- Icon for the subject with dynamic background color -->
                    <icondiv :style="{ 'backgroundColor': currentSubject.iconbg }">
                        <img style="width: 28px; height:28px; @media (min-width: 768px) {width: 40px; height:40px;}"
                            :src="getImageUrl(currentSubject.icon)" alt="subject-icon">
                    </icondiv>
                    <!-- Text displaying current subject title -->
                    <cardtext>{{ currentSubject.title }}</cardtext>
                </titlediv>
                <Toggle></Toggle><!-- Toggle component for light/dark mode -->
            </titletogglecontainer>

            <innercontainer v-show="!showScore">
                <!-- Inner container for Questions and mcqs which displays when showScore is false-->

                <headercontainer><!-- Header container with current question number and current question -->
                    <!-- Paragraph displaying current question number -->
                    <headercontainerp>Question {{ currentQuestionIndex + 1 }} of {{ currentSubject.questions.length }}
                    </headercontainerp>
                    <!-- Question text fetched dynamically -->
                    <question>{{ currentSubject.questions[currentQuestionIndex].question }}</question>
                    <!-- Progress bar -->
                    <progressbarouter>
                        <progressbarinner :style="{ width: progressPercentage + '%' }"></progressbarinner>
                    </progressbarouter>
                </headercontainer>

                <!-- Container for displaying options -->
                <cardcontainer>
                    <!-- Label and card for each option -->
                    <label style="width: 100%;"
                        v-for="(option, index) in currentSubject.questions[currentQuestionIndex].options" :key="index">
                        <card :class="[
                            { 'selected': selectedOption === option },
                            { 'correct-option': isOptionCorrect(option) },
                            { 'incorrect-option': isOptionIncorrect(option) },
                            { 'isSubmitted': isSubmitted }
                        ]" @mouseover="hoveredOption = option" @mouseleave="hoveredOption = ''">
                            <!-- Invisible radio input for option selection -->
                            <input type="radio" :name="'question-' + currentQuestionIndex" :value="option"
                                v-model="selectedOption" style="display: none;" :disabled="isSubmitted">

                            <!-- Icon div displaying option letter -->
                            <icondiv :style="getIconStyle(option)">
                                {{ getLetter(index) }}
                            </icondiv>
                            <cardtext>{{ option }}</cardtext>

                            <!-- Container for correct or incorrect icons -->
                            <div style="display: flex; margin-left: auto;">
                                <icondiv v-if="isOptionCorrect(option)" style="background-color: transparent;">
                                    <img style="width: 28px; height:28px; @media (min-width: 768px) {width: 40px; height:40px;}"
                                        :src="getImageUrl('icon-correct.svg')" alt="">
                                </icondiv>
                                <icondiv v-if="isOptionIncorrect(option)" style="background-color: transparent;">
                                    <img style="width: 28px; height:28px; @media (min-width: 768px) {width: 40px; height:40px;}"
                                        :src="getImageUrl('icon-incorrect.svg')" alt="">
                                </icondiv>
                            </div>
                        </card>
                    </label>

                    <!-- Buttons for submission, navigation, and score display -->
                    <styledbutton v-show="showSubmitBtn" @click="submitAnswer">Submit answer</styledbutton>
                    <styledbutton v-show="showNextBtn" @click="nextQuestion">Next question</styledbutton>
                    <styledbutton v-show="showScoreBtn" @click="showQuizScore">Show score</styledbutton>
                    <!-- Error message display -->
                    <errormessage v-show="error">
                        <img style="width: 28px; height:28px; @media (min-width: 768px) {width: 40px; height:40px;}"
                            :src="getImageUrl('icon-incorrect.svg')" alt="error-icon">
                        {{ errorMsg }}
                    </errormessage>

                </cardcontainer>

            </innercontainer>

            <innercontainer v-show="showScore"><!-- Inner container for scores which displays when showScore is true-->
                <headercontainer><!-- Header container with title -->
                    <headercontainerh1>Quiz Completed <headercontainerspan>You scored...</headercontainerspan>
                    </headercontainerh1>
                </headercontainer>

                <!-- Container for displaying score -->
                <cardcontainer>
                    <!-- Card displaying score information -->
                    <scorecard>
                        <titlediv>
                            <!-- Icon for the subject with dynamic background color -->
                            <icondiv :style="{ 'backgroundColor': currentSubject.iconbg }">
                                <img style="width:28px; height:28px; @media (min-width: 768px) {width: 40px; height:40px;}"
                                    :src="getImageUrl(currentSubject.icon)" alt="">
                            </icondiv>
                            <!-- Text displaying subject title -->
                            <cardtext>{{ currentSubject.title }}</cardtext>
                        </titlediv>

                        <scorediv>
                            <!-- Score section displaying user's score -->
                            <score>{{ score }}</score>
                            <!-- Paragraph displaying total questions -->
                            <headercontainerp>out of {{ currentSubject.questions.length }}</headercontainerp>
                        </scorediv>
                    </scorecard>

                    <!-- Button to play quiz again -->
                    <router-link style="width: 100%;" :to="{ name: 'home' }">
                        <styledbutton>
                            Play Again
                        </styledbutton>
                    </router-link>
                </cardcontainer>

            </innercontainer>

        </outercontainer>

        <!-- Bottom circle decoration -->
        <outerbottomcircle>
            <innercircle>
            </innercircle>
        </outerbottomcircle>
    </screen>
</template>


<script lang="ts">
// Import the quiz store to access quiz data
import { useQuizStore } from '../stores/quizstore';
// Import styled components for styling
import {
    outercontainer, innercontainer, card, icondiv, cardcontainer, screen, cardtext, headercontainer, headercontainerspan, headercontainerh1, headercontainerp, outertopcircle, outerbottomcircle, innercircle, titletogglecontainer, titlediv, question, styledbutton, errormessage, scorecard, score, scorediv, progressbarouter, progressbarinner
} from '@/styled-components/styled-components';
// Import Toggle component for theme switching
import Toggle from '@/components/Toggle.vue'


export default {
    name: 'Quiz',

    // Registering components used in this template
    components: {
        Toggle, outercontainer, innercontainer, card, icondiv, cardcontainer, screen, cardtext, headercontainer, headercontainerspan, headercontainerh1, headercontainerp, outertopcircle, outerbottomcircle, innercircle, titletogglecontainer, titlediv, question, styledbutton, errormessage, scorecard, score, scorediv, progressbarouter, progressbarinner
    },

    // Data initialization
    data() {
        return {
            currentSubject: {} as any, // Placeholder for current quiz subject
            currentQuestionIndex: 0, // Index of the current question
            showNextBtn: false, // Controls the display of the next question button
            showSubmitBtn: true, // Controls the display of the submit button
            showScoreBtn: false,  // Controls the display of the score button
            selectedOption: "", // Holds the currently selected option
            hoveredOption: "", // Tracks the currently hovered option for styling
            errorMsg: "", // Error message to display
            error: false, // Controls the error message display
            showCorrectIcons: false,  // Controls the display of correct answer icons
            showIncorrectIcons: false,  // Controls the display of incorrect answer icons
            isSubmitted: false, // Flag to track if the answer has been submitted
            score: 0, // Tracks the user's score
            showScore: false, // Controls the display of the quiz & score screen
            theme: ""

        }
    },

    // Created hook: runs when the component is created
    created() {
        const quizStore = useQuizStore();  // Access the quiz store
        // Find the subject based on the route parameter
        const subject = quizStore.subjects.find(subject => subject.title === this.$route.params.title);
        if (subject) {
            this.currentSubject = subject; // Set the current subject if found
        }
        
        this.theme = quizStore.theme
        // Watch for changes in the store's theme and update the local theme
        this.$watch(() => quizStore.theme, (newTheme) => {
            this.theme = newTheme;
        });
    },

    // Methods for handling component logic
    methods: {
        // Method to get the URL of images from assets
        getImageUrl(name: string) {
            return new URL(`../assets/images/${name}`, import.meta.url).href;
        },

        // Method to convert index to letter (e.g., 0 => A, 1 => B, etc.)
        getLetter(index: number) {
            return String.fromCharCode(65 + index); // Convert index to ASCII (A=65, B=66, etc.)
        },

        // Method to proceed to the next question
        nextQuestion() {
            this.resetState(); // Reset the state before proceeding to the next question
            if (this.currentQuestionIndex < this.currentSubject.questions.length - 1) {
                this.currentQuestionIndex++; // Move to the next question index
            }
        },

        // Method to toggle display of quiz score screen
        showQuizScore() {
            this.showScore = !this.showScore; // Toggle the showScore flag
        },

        // Method to get dynamic styles for option icons
        getIconStyle(option: string) {
            const styles: Record<string, string> = {}; // Initialize empty styles object

            // Set styles based on current state (hovered, selected, correct, incorrect)
            if (this.hoveredOption === option) {
                styles.backgroundColor = '#F6E7FF';
                styles.color = '#A729F5';
            } else if (this.selectedOption === option) {
                styles.backgroundColor = '#A729F5';
                styles.color = 'white';
            }

            // Display correct or incorrect styles based on the option
            if (this.isOptionCorrect(option)) {
                styles.backgroundColor = '#26D782';
                styles.color = 'white';
            } else if (this.isOptionIncorrect(option)) {
                styles.backgroundColor = '#EE5454';
                styles.color = 'white';
            }
            return styles;// Return the computed styles
        },

        // Method to submit the selected answer
        submitAnswer() {
            // Checks if no option is selected and displays an error
            if (!this.selectedOption) {
                this.errorMsg = "Please select an answer"
                this.error = true;
                return
            }

            // Resets error state
            this.error = false;
            // Retrieves the correct answer for the current question
            const correctAnswer = this.currentSubject.questions[this.currentQuestionIndex].answer;
            // Hides the submit button after submission
            this.showSubmitBtn = false;
            // Adjusts button visibility based on current question index
            if (this.currentQuestionIndex === this.currentSubject.questions.length - 1) {
                this.showScoreBtn = true;
                this.showNextBtn = false;
                this.showSubmitBtn = false;
            } else {
                this.showNextBtn = true;
            }

            // Updates score and displays correct/incorrect icons based on answer correctness
            if (this.selectedOption === correctAnswer) {
                this.showCorrectIcons = true;
                this.score++
            } else {
                this.showCorrectIcons = true;
                this.showIncorrectIcons = true;
            }

            // Disables further option selection
            this.isSubmitted = true;
        },

        // Method to check if an option is correct to display correct icon on that option  
        isOptionCorrect(option: string) {
            return this.showCorrectIcons && option === this.currentSubject.questions[this.currentQuestionIndex].answer;
        },

        // Method to check if an option is incorrect to display incorrect icon on that option
        isOptionIncorrect(option: string) {
            return this.showIncorrectIcons && option === this.selectedOption && option !== this.currentSubject.questions[this.currentQuestionIndex].answer;
        },

        // Method to reset component state after each questionv
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

    // Computed properties for dynamic styling
    computed: {
        // Hover style for option when hovered
        hoverStyle() {
            return {
                color: '#A729F5',
                backgroundColor: '#F6E7FF',
            };
        },

        // Calculate progress percentage
        progressPercentage() {
            return ((this.currentQuestionIndex + 1) / this.currentSubject.questions.length) * 100;
        }

    },
}
</script>

<style scoped>
/* Styling for selected option */
.selected {
    border: 3px solid #A729F5;
}

/* Styling for correct option */
.correct-option {
    border: 3px solid #26D782;
}

/* Styling for incorrect option */
.incorrect-option {
    border: 3px solid #EE5454;
}

/* Disable pointer events after option submission */
.isSubmitted {
    pointer-events: none;
}
</style>