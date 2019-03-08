<template>
  <div class="home--wrapper">
    <transition name="shrink">
      <LoadingSpinner 
        v-if="dataLoading"
      />
    </transition>
    <transition name="grow">
      <div v-if="!dataLoading" >
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
      </div>
    </transition>
    <QuoteAdder />
  </div>
</template>

<script>
import LoadingSpinner from '../components/LoadingSpinner'
import Quote from '../components/Quote'
import QuoteAdder from '../components/QuoteAdder'
import axios from 'axios'

export default {
  components: {
    Quote,
    QuoteAdder,
    LoadingSpinner
  },
  data: () => {
    return {
      dataLoading: true
    }
  },
  methods: {
    getQuotes: function() {
      axios
        .get('https://quotes.bornasepic.me/api/quotes')
          .then(response => {
           this.addQuotes(response.data)
          })
          .then(() => {
            setTimeout(() => {
              this.dataLoading = false
            }, 2000)
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

.shrink-leave-active {
  animation: shrink 1s;
}
.grow-enter-active {
  animation: grow 1.5s;
}

@keyframes grow {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes shrink {
  0% {
    transform: translateX(-50%) scale(1);
  }
  100% {
    transform: translateX(-50%) scale(0) ;
  }
}
</style>


