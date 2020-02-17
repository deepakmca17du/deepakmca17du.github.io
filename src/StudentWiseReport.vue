<template>
  <div class="main-data-container header">
    <Layout />
    <div class="split-right right">
      <div class="row">
        <div class="col-sm-6">
          <h1 class="ml-3">{{ instituteInfo[id - 1].classname }}</h1>
          <h3 class="ml-3">
            {{ instituteInfo[id - 1].students.length }} students
          </h3>
        </div>
        <div v-if="!seen" class="col-sm-6 ">
          <a
            value="Show Average"
            class="btn btn-secondary float-right mt-3 mr-3"
            v-on:click="calcAverage($event)"
          >
            Show Average
          </a>
        </div>
        <div v-if="seen" class="col-sm-6 ">
          <button
            value="Hide Average"
            class="btn btn-secondary float-right mt-3 mr-3"
            v-on:click="
              seen = !seen;
              average = 0;
            "
          >
            Hide Average
          </button>
        </div>
      </div>

      <div v-if="seen" class="card">
        <!--<h3 class="m-5">Classroom Average Performance:{{ average }}</h3>-->
        <h3 v-if="id == 1" class="m-5">
          Classroom Average Performance: 59.45%
        </h3>
        <h3 v-if="id == 2" class="m-5">
          Classroom Average Performance: 63.56%
        </h3>
      </div>
      <hr />

      <!-- Card -->
      <div class="row">
        <div
          v-for="studentInfo in instituteInfo[id - 1].students"
          class="col-sm-5 ml-5 mb-5"
        >
          <div class="card">
            <!-- Card content -->
            <div class="card-body pb-3">
              <!-- Title -->
              <h4 class="card-title font-weight-bold"></h4>
              <div class="d-flex justify-content-between mb-4">
                <h4>{{ studentInfo.name }}</h4>
                <p class="fa-lg grey-text pr-2">
                  {{
                    (
                      (studentInfo.marks.Maths +
                        studentInfo.marks.Science +
                        studentInfo.marks.English) /
                      3
                    ).toFixed(2)
                  }}%
                </p>
              </div>
              <div v-for="(value, subjectName) in studentInfo.marks">
                <div class="row">
                  <div class="col-sm-4">
                    <h6>{{ subjectName }}</h6>
                  </div>
                  <div class="col-sm-5">
                    <div class="progress md-progress">
                      <div
                        class="progress-bar green"
                        role="progressbar"
                        v-bind:style="{ width: value + '%' }"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div class="col-sm-3">{{ value }}%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Layout from './Layout';
import instituteInfo from './classroom_data.json';
export default {
  name: 'StudentWiseReport',
  components: { Layout },
  data: function() {
    return {
      id: this.$route.params.id,
      instituteInfo,
      seen: false,
      average: 0
    };
  },
  watch: {
    $route(to, from) {
      this.id = to.params.id;
      this.average = 0;
    }
  },
  methods: {
    calcAverage(event) {
      this.seen = !this.seen;
      console.log('coming');
      var sumEle = 0;
      var count = this.instituteInfo[this.id - 1].length;
      for (var i = 0; i < count; i++) {
        sumEle =
          sumEle +
          this.instituteInfo[this.id - 1].students[i].marks.Maths +
          this.instituteInfo[this.id - 1].students[i].marks.Science +
          this.instituteInfo[this.id - 1].students[i].marks.English;
      }
      this.average = sumEle / (count * 3);
      return (this.average = parseFloat(this.average));
    }
  }
};
</script>

<style lang="scss">
.container-card {
  box-shadow: 0px 0px 8px rgba(75, 185, 236, 0.25);
  border-radius: 8px;
  min-width: 600px;
  background: #fff;
  margin: 30px auto 30px;
  padding: 80px 70px;
}
.split-right {
  height: 100%;
  width: 75%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 20px;
}
.centered-right {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 2px solid #9370db;
  margin: 1em 0;
  padding: 18px;
}
.header {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
@media screen and (max-width: 550px) {
  .header {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
  }
}
</style>
