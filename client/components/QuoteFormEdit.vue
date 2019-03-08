<template>
  <div class="submit-wrapper">
    <form 
      @submit="validateForm"
    >
      <p class="error-message">{{error}}</p>
      <div class="question-wrapper">
        <div class="question">
          <label for="authorName">Author Name:</label>
          <input type="text" name="authorName" id="authorName" autocomplete="off" v-model="author" @click="removeError()">
        </div>
        <div class="question">
          <label for="quote">{{ authorDisplayName }} Quote:</label>
          <textarea type="text" name="quote" id="quote" autocomplete="off" rows="3" v-model="quote" @click="removeError()"></textarea>
        </div>
        <input type="submit" value="Submit the quote">
      </div>
    </form>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: "quoteEdit",
  props: {
    editedQuoteProps: {
      type: Object,
      default: {}
    }
  },
  data: function() {
    return {
      error: '',
      author: this.editedQuoteProps.author,
      quote: this.editedQuoteProps.quote,
      quoteID: this.editedQuoteProps.id
    }
  },
  computed: {
    authorDisplayName: function() {
      return this.author + "'s"
    },
    quoteChanged: function() {
      return this.author != this.editedQuoteProps.author || this.quote != this.editedQuoteProps.quote
    } 
  },
  methods: {
    validateForm: function(e) {
      e.preventDefault();
      if(this.author && this.quote && this.quoteChanged) {
        axios 
          .put('https://quotes.bornasepic.me/api/quotes', {params: {
            author: this.author,
            quote: this.quote,
            id: this.quoteID
          }})
          .then(res => {
            console.log(res)
            let quote = {
              newQuote: JSON.parse(res.config.data).params,
              quoteIndex: this.editedQuoteProps.quoteIndex
            }
            this.$store.commit('updateQuote', quote)
          })
          .then(res => {
            this.author = ''
            this.quote = ''
            this.$store.commit('closeQuoteForm')
            this.$store.commit('changeEditorMode', 'add')
          })
        return
      }
      this.error = 'Please make sure all fields are filled in before submitting the quote';
    },
    removeError: function() {
      this.error = '';
    }
  }
}
</script>

<style>
  label {
    display: block;
  }
  .submit-wrapper {
    width: 95%;
    margin: auto;
    padding: 30px 10px;
  }
  .submit-wrapper form input[type=text], .submit-wrapper form textarea {
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid black;
    background: none;
    margin-bottom: 10px;
    -webkit-appearance: none;
    font-size: 16px;
    padding: 5px;
  }
  .submit-wrapper form input[type=text]:focus, .submit-wrapper form textarea:focus {
    outline: none;
  }
  .question-wrapper {
    margin-bottom: 20px;
    max-width: 360px;
    width: 100%;
    margin: auto;
  }
  input[type="submit"] {
    width: 200px;
    margin-left: calc(50% - 100px);
    padding: 10px 0px;
    border: none;
    border-radius: 20px;
    color: white;
    font-size: 16px;
    font-weight: bold;
    background: #e46524;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }
  input[type="submit"]:hover {
    box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.71);
  }
  .error-message {
    text-align: center;
    margin-top: -20px;
  }

</style>
