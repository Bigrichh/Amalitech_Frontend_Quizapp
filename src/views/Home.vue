<template>

  <screen>
    <outertopcircle>
      <innercircle>
      </innercircle>
    </outertopcircle>
    <outercontainer>
      <Toggle></Toggle>
      <innercontainer>
        <headercontainer>
          <headercontainerh1>Welcome to the <headercontainerspan>Frontend Quiz!</headercontainerspan>
          </headercontainerh1>
          <headercontainerp>Pick a subject to get started</headercontainerp>
        </headercontainer>

        <cardcontainer>
          <router-link v-for="subject in subjects" :to="{name:'quiz',params: {title:subject.title} }">
            <card>
              <icondiv :style="{ 'backgroundColor': subject.iconbg }">
                <img style="width: 40px; height:40px" :src="getImageUrl(subject.icon)" alt="">
              </icondiv>
              <cardtext>{{ subject.title }}</cardtext>
            </card>
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
import {
  outercontainer,innercontainer, card, icondiv, cardcontainer, screen, cardtext, headercontainer, headercontainerspan, headercontainerh1, headercontainerp, outertopcircle, outerbottomcircle, innercircle,
} from '@/styled-components/styled-components';
import { useQuizStore } from '../stores/quizstore';
import Toggle from '@/components/Toggle.vue'



export default {
  name: 'Home',
  components: {
    Toggle, outercontainer,innercontainer, card, icondiv, cardcontainer, screen, cardtext, headercontainer, headercontainerspan, headercontainerh1, headercontainerp, outertopcircle, outerbottomcircle, innercircle
  },
  computed: {
    subjects() {
      const quizStore = useQuizStore();
      return quizStore.subjects;
    },
  },
  methods: {
    getImageUrl(name: string) {
      return new URL(`../assets/images/${name}`, import.meta.url).href;
    }
  },
}
</script>
