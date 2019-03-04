<template>
  <div class="home--wrapper">
    <h2>Quotes collection 
      <span v-if="this.$store.state.totalQuotes > 0">({{this.$store.state.totalQuotes}})</span>
    </h2>
    <div class="quotes--wrapper">
      <Quote 
        v-for="(quote, index) in this.$store.state.quotesContent"
        :author="quote.author"
        :quote="quote.quote"
        :quoteIndex="index"
        :id="quote.id"
        :key="`quote-${index}`"
      />
    </div>
    <br>
    <QuoteAdder />
  </div>
</template>

<script>
import Quote from '../components/Quote'
import QuoteAdder from '../components/QuoteAdder'
import axios from 'axios'

export default {
  components: {
    Quote,
    QuoteAdder
  },
  methods: {
    getQuotes: function() {
      axios
        .get('http://localhost:3030/quotes')
          .then(response => {
           this.addQuotes(response.data)
          })
    },
    addQuotes: function(quotes) {
      quotes.forEach((quote, index) => {
        quote.index = index
        this.$store.commit('addQuote', quote)
      });
    }
  },
  beforeMount() {
    this.getQuotes()
  }
}
</script>

<style>
.home--wrapper {
  max-width: 720px;
  margin: auto;
  padding-bottom: 100px;
}
</style>


