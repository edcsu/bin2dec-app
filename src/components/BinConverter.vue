<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="6">
            <v-form
                ref="form"
                v-model="valid"
                lazy-validation
            >
                <v-text-field
                v-model="number"
                :counter="8"
                :rules="numberRules"
                label="Binary number"
                required
                ></v-text-field>

                <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
                >
                Validate
                </v-btn>

                <v-btn
                color="error"
                class="mr-4"
                @click="reset"
                >
                Reset Form
                </v-btn>

                <v-btn
                color="warning"
                @click="resetValidation"
                >
                Reset Validation
                </v-btn>
            </v-form>


      </v-col>
    </v-row>
  </v-container>
</template>


<script>
  export default {
    name: 'BinConverter',
    data: () => ({
      valid: true,
      number: '',
      numberRules: [
        v => !!v || 'A binary number is required',
        v => (v &&  /(0|1)/g.test(v)) || 'Only binary numbers 0 and 1 are allowed',
        v => (v && v.length <= 8) || 'The binary number must be less than 8 characters',
      ],
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>