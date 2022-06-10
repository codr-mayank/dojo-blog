<template>
  <div class="home">
    <h1>Homepage</h1>
    <p ref="p">name is {{ name }} and age is {{ age }}</p>
    <button @click="handleClick">Change ninja</button>
    <button @click="age++">Increase age</button>
    <input type="text" v-model="name"/>

    <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update ninja one</button>

    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update ninja two</button>

    <h2>Computed Values</h2>
    <p>{{ newName }}</p>
    <input type="text" v-model="search" />
    <p v-if="search">Search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>
    <!-- watch and watch effect -->
    <button @click="handleWatch">Stop Watching</button>
  </div>
</template>

<script>
// @ is an alias to /src

import { ref, reactive, computed, watch, watchEffect } from 'vue';

export default {
  name: 'HomeView',
  setup() {
    const name = ref('mario');
    const age = ref(30);

    // ref
    let p = ref(null);

    const handleClick = () => {
      name.value = 'yoshi';
      age.value = 35;
    }

    // ref data
    const ninjaOne = ref({ name: 'mario', age: 30 });

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40;
    }

    // reactive data
    const ninjaTwo = reactive({ name: 'luigi', age: 35 });

    const updateNinjaTwo = () => {
      ninjaTwo.age = 45;
    }

    // computed values
    const newName = computed(() => {
      return 'shaun';
    });

    const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach']);

    const search = ref('');
    const matchingNames = computed(() =>
      (names.value || []).filter(name =>
        name.includes(search.value)));

    // watch and watchEffect
    const stopWatch = watch(search, () => {
      console.log('watch function ran');
    });

    const stopWatchEffect = watchEffect(() => {
      console.log('watchEffect function ran', search.value);
    });

    const handleWatch = () => {
      stopWatch();
      stopWatchEffect();
    }

    return {
      name,
      age,
      handleClick,
      p,
      ninjaOne,
      updateNinjaOne,
      ninjaTwo,
      updateNinjaTwo,
      newName,
      names,
      search,
      matchingNames,
      handleWatch
    }
  }
}
</script>
