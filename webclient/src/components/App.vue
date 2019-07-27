<template>
  <div class="container">
    <div class="hero">
      <div class="hero-body">
        <div class="title">Trullo</div>
      </div>
    </div>
    <b-loading :active.sync="loading" :is-full-page="true"></b-loading>
    <div v-if="!loading && !error">
      <div class="section-holder">
        <div class="card-section" :key="section.id" v-for="section in getSections">
          <div class="section-header">{{section.title}}</div>
          <div class="section-body">
            <draggable
              :list="section.children"
              ghostClass="ghost"
              group="cards"
              @change="dnd(section.id, $event)"
            >
              <div class="trullo" v-for="card in section.children" :id="card.id" :key="card.id">
                <div class="trullo-header">{{card.title}}</div>
              </div>
            </draggable>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!loading && error">
      <b-notification type="is-danger" :closable="false" role="alert">Something went terribly wrong!</b-notification>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ghost {
  background: red;
}

.section-holder {
  display: flex;
  align-items: flex-start;

  .card-section {
    margin: 0 2rem;
    width: 250px;
    background-color: #3498db;
    border-radius: 0.5rem;
    padding: 0.5rem 0;

    .section-header {
      font-size: 1.3rem;
      text-align: center;
      padding: 0.6rem 0;
      color: #fff;
    }

    .section-body {
      background-color: inherit;
      display: flex;
      flex-direction: column;

      .trullo {
        cursor: pointer;
        user-select: none;
        -moz-user-select: none;
        margin: 0 0.6rem 0.6rem;
        padding: 0.4rem;
        background-color: #fff;
        border-radius: 0.2rem;
      }

      .trullo-drag {
        background-color: red;
      }
    }
  }
}
</style>


<script>
import { mapActions, mapGetters } from "vuex";
import { setTimeout } from "timers";
import draggable from "vuedraggable";

export default {
  name: "App",

  components: { draggable },

  data() {
    return {
      loading: true,
      error: false
    };
  },

  methods: {
    ...mapActions(["initialLoad", "moveCard", "deleteCard"]),
    async dnd(section, e) {
      try {
        if (e.moved || e.added) {
          const data = e.moved || e.added;
          await this.moveCard({
            id: data.element.id,
            to: { section, index: data.newIndex }
          });
        }
      } catch (err) {
        this.$notification.open({
          duration: 2000,
          message: `Failed to move this card`,
          position: "is-bottom-right",
          type: "is-danger"
        });
        console.error(err);
      }
    }
  },

  computed: {
    ...mapGetters(["getSections"])
  },

  async mounted() {
    try {
      await this.initialLoad();
    } catch (err) {
      console.error(err);
      this.error = err;
    } finally {
      this.loading = false;
    }
  }
};
</script>
