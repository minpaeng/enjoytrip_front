<template>
  <li class="list-group-item border-0 border-bottom">
    <div class="row mt-1">
      <div class="col-1">{{ comment.userId }}</div>
      <div class="col-8">{{ comment.content }}</div>
      <div class="col-2">{{ comment.registerDate }}</div>
      <a class="col-1" href="${root}/information/${post.id}/comment/${comment.id}">삭제</a>
    </div>
  </li>
</template>

<script>
export default {
  name: "CommentItem",
  components: {},
  props: {
    comment: Object,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style scoped></style>
