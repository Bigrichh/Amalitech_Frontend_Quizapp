<template>

  <screen :class="theme"><!-- Main screen container -->

    <!-- Top circle decoration -->
    <outertopcircle>
      <innercircle>
      </innercircle>
    </outertopcircle>

    <outercontainer> <!-- Outer container for content -->
      <Toggle></Toggle><!-- Toggle component for light/dark mode -->

      <innercontainer><!-- Inner container for main content -->

        <headercontainer> <!-- Header container with title and subtitle -->
          <headercontainerh1>Welcome to the
            <headercontainerspan>Frontend Quiz!</headercontainerspan>
          </headercontainerh1>
          <headercontainerp>Pick a subject to get started</headercontainerp>
        </headercontainer>

        <!-- Container for quiz subject cards -->
        <cardcontainer>
          <!-- Loop through each subject and create a router link -->
          <router-link style="width: 100%;" v-for="subject in subjects"
            :to="{ name: 'quiz', params: { title: subject.title } }">
            <!-- Card component for each subject -->
            <card>
              <!-- Icon for the subject with dynamic background color -->
              <icondiv :style="{ 'backgroundColor': subject.iconbg }">
                <img style="width: 32px; height:32px; @media (min-width: 768px) {width: 40px; height:40px;}"
                  :src="getImageUrl(subject.icon)" alt="icon-image">
              </icondiv>
              <!-- Subject title text -->
              <cardtext>{{ subject.title }}</cardtext>
            </card>
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
// Import styled components for styling
import {
  outercontainer, innercontainer, card, icondiv, cardcontainer, screen, cardtext, headercontainer, headercontainerspan, headercontainerh1, headercontainerp, outertopcircle, outerbottomcircle, innercircle,
} from '@/styled-components/styled-components';
// Import the quiz store to access quiz data
import { useQuizStore } from '../stores/quizstore';
// Import Toggle component for theme switching
import Toggle from '@/components/Toggle.vue'


export default {
  name: 'Home',
  // Registering components used in this template
  components: {
    Toggle, outercontainer, innercontainer, card, icondiv, cardcontainer, screen, cardtext, headercontainer, headercontainerspan, headercontainerh1, headercontainerp, outertopcircle, outerbottomcircle, innercircle
  },
  data() {
    return {
      theme: "",
    }
  },
  computed: {
    // Computed property to get the list of subjects from the quiz store
    subjects() {
      const quizStore = useQuizStore();
      return quizStore.subjects;
    },
  },

  // Created hook: runs when the component is created
  created() {
    const quizStore = useQuizStore();  // Access the quiz store
    this.theme = quizStore.theme

    // Watch for changes in the store's theme and update the local theme
    quizStore.$subscribe((mutation, state) => {
      this.theme = state.theme;
    });
  },


  methods: {
    // Method to construct the URL for an image asset
    getImageUrl(name: string): string {
      return new URL(`../assets/images/${name}`, import.meta.url).href;
    }
  },
}
</script>