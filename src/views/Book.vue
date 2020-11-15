<template>
  <div>
    <book
            v-bind:title="bookFind.title"
            v-bind:author="bookFind.author"
            v-bind:description="bookFind.description"
            v-bind:price="bookFind.price"
          ></book>
  </div>
</template>

<script>
import BookServices from '@/services/BookServices'
import book from '@/components/Book'
export default {
 
  data: () => ({
    bookFind: null,

    }),
  components: {
    book,
  },
  async mounted() {
    const id = this.$route.params.book_id
    this.bookFind = (await BookServices.findOne(id)).data
  },
}
</script>

<style>

</style>