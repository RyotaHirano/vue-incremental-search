<template lang="pug">
  .wrapper
    input(:value="searchValue", @input="search($event.target.value)")
    ul
      li(v-for="item in suggestions")
        span(@click="setInput(item)") {{ item }}
</template>

<script>
  export default {
    name: 'incremental-search',

    data: function() {
      return {
        searchValue: '',
        suggestions: [],
        list1: [
          'John',
          'Paul',
          'Ringo',
          'George'
        ]
      }
    },

    methods: {
      search: function(value) {
        this.searchValue = value
        if(value === '') {
          this.clearSuggetions()
        } else {
          const re = new RegExp(value, 'i')
          this.suggestions = [...this.list1].filter(name => re.test(name))
        }
      },

      setInput: function(value) {
        this.searchValue = value
        this.clearSuggetions()
      },

      clearSuggetions: function () {
        this.suggestions = []
      }
    }
  }
</script>
