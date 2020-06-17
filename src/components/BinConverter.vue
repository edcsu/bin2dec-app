<template>
  <v-container>
    <v-row class="">
      <v-col cols="6">
        <v-card
          class="mx-auto pa-3"
          outlined
        >
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
                ></v-text-field>

                <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="Convert"
                >
                Convert
                </v-btn>

                <v-btn
                color="error"
                class="mr-4"
                @click="reset"
                >
                Reset Number
                </v-btn>
            </v-form>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="">
      <v-col cols="3">
         <v-card
          class="mx-auto"
          min-height="130"
          outlined
        >
          <v-list-item two-line>
            <v-list-item-content>
              <div class="overline mb-4">Decimal Number</div>
              <v-list-item-title class="display-3 mb-1">{{convertedNumber}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
  import { binToDecimal } from "@/Helpers/helperMethods";

  export default {
    name: 'BinConverter',
    data: () => ({
      valid: true,
      number: '',
      numberRules: [
        v => !!v || 'A binary number is required',
        v => (v && /^[01]+$/.test(v)) || 'Only binary numbers 0 and 1 are allowed',
        v => (v && v.length <= 8) || 'The binary number must be less than 8 characters',
      ],
      convertedNumber: ''
    }),

    methods: {
      Convert () {
        this.$refs.form.validate()
        this.convertedNumber = binToDecimal(this.number)
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