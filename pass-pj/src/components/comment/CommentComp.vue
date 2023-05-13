<template>
  <div class="card mb-2">
    <div class="card-header bg-light"><i class="fa fa-comment fa"></i> 댓글</div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <div class="row">
            <div class="col-10"><textarea class="mt-2 mb-2 form-control" id="content" name="content" rows="1"></textarea></div>
            <div class="col-2"><button type="button" class="mt-2 mb-2 btn btn-dark" id="btn-comment">등록</button></div>
          </div>
        </li>
      </ul>
      <div class="card border-0 mt-1 mb-1">
        <ul class="list-group">
          <comment-item v-for="comment in comments" :key="comment" :comment="comment"></comment-item>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import CommentItem from "@/components/comment/CommentItem.vue";

export default {
  name: "CommentComp",
  components: {
    CommentItem,
  },
  props: {
    comments: Array,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
