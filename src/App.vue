<template>
  <v-app style="background-color: #010152ff">
    <v-container>
      <!-- Top Bar with Auto-scrolling Text -->
      <v-toolbar class="grey lighten-2 custom-toolbar">
        <v-spacer></v-spacer>
        <div class="marquee">
          <span>🔥 Special Discount Offers Available! Get Yours Now! 🔥</span>
        </div>
        <v-spacer></v-spacer>
      </v-toolbar>

      <!-- Horizontally Scrollable Cards Section -->
      <v-container class="scroll-container">
        <v-row align="center" justify="center" no-gutters>
          <v-btn icon @click="scrollLeft">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>

          <div ref="scrollWrapper" class="scroll-wrapper">
            <v-row no-gutters class="scroll-content">
              <v-col
                v-for="(item, index) in cardItems"
                :key="index"
                cols="12"
                sm="6"
                md="4"
                lg="3"
                class="pa-2"
                v-motion-fade-visible
              >
                <v-card class="custom-card1 hover-effect">
                  <v-card-title class="text-center">{{
                    item.title
                  }}</v-card-title>
                  <v-card-subtitle class="text-center">{{
                    item.subtitle
                  }}</v-card-subtitle>
                  <v-card-text class="text-center">{{
                    item.description
                  }}</v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </div>

          <v-btn icon @click="scrollRight">
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </v-row>
      </v-container>

      <!-- Main Content inside Containers -->
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-container class="content-box" v-motion-slide-bottom>
              <p class="text-center">Display any quotes related to neon</p>
            </v-container>
          </v-col>
          <v-col cols="12" md="6">
            <v-container class="content-box" v-motion-slide-bottom>
              <p class="text-center">Display neon image</p>
            </v-container>
          </v-col>
        </v-row>
      </v-container>

      <!-- Bottom Button -->

      <!-- Display Text Preview -->
      <v-card flat class="custom-cardtext">
        <v-row justify="center">
          <v-col cols="12">
            <div
              class="preview"
              :style="{ fontFamily: selectedFont, color: selectedColor }"
            >
              {{ userText || "Text Preview.." }}
            </div>
          </v-col>
        </v-row>
      </v-card>

      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="userText"
            outlined
            color="white"
            base-color="white"
            hide-details
            label="Enter Your Text"
            class="custom-text-field"
          ></v-text-field>

          <h3 class="mt-5" style="color: white">Choose Font:</h3>
          <v-container>
            <v-row>
              <v-col
                v-for="font in fonts"
                :key="font"
                cols="4"
                class="d-flex justify-center align-center"
              >
                <v-btn
                  :style="{ fontFamily: font }"
                  class="font-btn"
                  @click="selectedFont = font"
                >
                  {{ font }}
                </v-btn>
              </v-col>
            </v-row>
            <!-- Submit Button -->
          </v-container>
        </v-col>
        <!-- Left Side: Text Input & Color Selection -->
        <v-col cols="12" md="6">
          <h3 style="color: aliceblue">Choose Color:</h3>
          <v-row class="mt-2">
            <v-col v-for="color in colors" :key="color" cols="1" md="1">
              <div
                class="color-circle"
                :style="{ backgroundColor: color }"
                @click="selectedColor = color"
              >
                <v-icon size="12" v-if="selectedColor === color" color="black"
                  >mdi-check</v-icon
                >
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <v-container class="text-center mt-3">
            <v-btn class="px-5" @click="openDialog">Submit</v-btn>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="showForm">
      <v-card style="background-color: black">
        <v-card-title>Enter Your Details</v-card-title>
        <v-card-text>
          <v-form ref="form">
            <v-text-field
              v-model="userName"
              label="Name"
              outlined
              :rules="[rules.required]"
            ></v-text-field>
            <v-text-field
              v-model="userMobile"
              label="Mobile Number"
              outlined
              :rules="[rules.required, rules.phone]"
            ></v-text-field>
            <v-text-field
              v-model="userAddress"
              label="Address"
              outlined
              :rules="[rules.required]"
            ></v-text-field>
            <v-text-field
              v-model="userPincode"
              label="Pincode"
              outlined
              :rules="[rules.required, rules.pincode]"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="red" text @click="showForm = false">Cancel</v-btn>
          <v-btn color="green" text @click="submitForm">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-footer class="footer fade-in">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" class="text-center">
            <h3>Get in Touch</h3>
            <v-row justify="center">
              <v-col cols="auto">
                <a
                  href="https://wa.me/9790189483"
                  target="_blank"
                  class="contact-link"
                >
                  <v-icon color="green">mdi-whatsapp</v-icon> 9790189483
                </a>
                <a
                  href="https://wa.me/9790189483"
                  target="_blank"
                  class="contact-link"
                  >9994409486</a
                >
              </v-col>
              <v-col cols="auto">
                <a
                  href="https://instagram.com/yourprofile"
                  target="_blank"
                  class="contact-link"
                >
                  <v-icon color="#E1306C">mdi-instagram</v-icon> Instagram
                </a>
              </v-col>
              <v-col cols="auto">
                <a href="mailto:contact@example.com" class="contact-link">
                  <v-icon color="#D44638">mdi-email</v-icon> Email
                </a>
              </v-col>
              <v-col cols="auto">
                <v-icon color="red">mdi-map-marker</v-icon> Address: 123 Street,
                City, Country
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import { db } from "@/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export default {
  name: "NeonLayout",
  data() {
    return {
      userText: "",
      userName: "",
      userMobile: "",
      userAddress: "",
      userPincode: "",
      selectedFont: "hello",
      selectedColor: "#FFFFFF",
      showForm: false,
      userRecords: [],
      fonts: [
        "Hello",

        "Cyber Neon",
        "Neon Pixel",
        "Bright Lights",
        "Cyber Neon",
        "Neon Pixel",
        "Bright Lights",
        "Cyber Neon",
        "Cyber Neon",
      ],
      colors: [
        "#FFFFFF",
        "#F3DAAE",
        "#FF0000",
        "#00FF00",
        "#00C8FF",
        "#0000FF",
        "#FFA500",
        "#FFFF00",
        "#8F00FF",
        "#FF00FF",
      ],
      cardItems: [
        {
          title: "Offer 1",
          subtitle: "Discount 10%",
          description: "Save on your first order!",
        },
        {
          title: "Offer 2",
          subtitle: "Discount 20%",
          description: "Limited time offer!",
        },
        {
          title: "Offer 3",
          subtitle: "BOGO",
          description: "Buy one, get one free!",
        },
        {
          title: "Offer 3",
          subtitle: "BOGO",
          description: "Buy one, get one free!",
        },
        {
          title: "Offer 3",
          subtitle: "BOGO",
          description: "Buy one, get one free!",
        },
        {
          title: "Offer 3",
          subtitle: "BOGO",
          description: "Buy one, get one free!",
        },
      ],
      rules: {
        required: (value) => !!value || "Field is required",
        phone: (value) =>
          /^\d{10}$/.test(value) || "Enter a valid phone number",
        pincode: (value) => /^\d{6}$/.test(value) || "Enter a valid pincode",
      },
    };
  },
  methods: {
    openDialog() {
      this.showForm = true;
    },
    async submitForm() {
      if (
        !this.userName ||
        !this.userMobile ||
        !this.userAddress ||
        !this.userPincode
      ) {
        alert("All fields are required!");
        return;
      }
      try {
        await addDoc(collection(db, "userRecords"), {
          name: this.userName,
          mobile: this.userMobile,
          address: this.userAddress,
          pincode: this.userPincode,
          text: this.userText || "No text provided",
          font: this.selectedFont,
          color: this.selectedColor,
          timestamp: new Date(),
        });
        alert("Data saved successfully!");
        this.userName = "";
        this.userMobile = "";
        this.userAddress = "";
        this.userPincode = "";
        this.userText = "";
        this.selectedFont = "";
        this.selectedColor = "#FFFFFF";
        this.showForm = false;
      } catch (error) {
        console.error("Firestore Error:", error);
        alert("Error saving data.");
      }
    },
    async loadRecords() {
      try {
        const querySnapshot = await getDocs(collection(db, "userRecords"));
        this.userRecords = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        if (!this.userRecords.length) {
          alert("No submissions found!");
        }
      } catch (error) {
        console.error("Error fetching records:", error);
        alert("Failed to load records.");
      }
    },
    scrollLeft() {
      this.$refs.scrollWrapper.scrollBy({ left: -300, behavior: "smooth" });
    },
    scrollRight() {
      this.$refs.scrollWrapper.scrollBy({ left: 300, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: "hello";
  src: url("@/assets/fonts/Barcelony.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
.color-circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 2px solid transparent;
}
/* Label color always white */
.custom-text-field :deep(.v-label) {
  color: white !important;
}
.custom-text-field :deep(.v-oulined) {
  color: white !important;
}

.font-btn {
  width: 100%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px; /* Adjust this based on your design */
  min-height: 40px; /* Ensure a proper height */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  padding: 5px; /* Add some padding */
}
.font-btn:hover {
  border: 2px solid blue;
}
.v-text-field--outlined >>> fieldset {
  border-color: white;
}
.custom-text-field :deep(input) {
  color: white !important;
}
.custom-cardtext {
  background-color: #010152ff;
  min-height: 180px; /* Ensures minimum height */
  display: flex;

  justify-content: center; /* Centers content horizontally */
}

.preview {
  font-size: 40px;
  min-height: 50px;
  text-align: center;
  margin-top: 16px;
}
.custom-toolbar {
  min-height: 40px !important;
  justify-content: center;
}

.marquee {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
}

.marquee span {
  display: inline-block;
  padding-left: 100%;
  animation: marquee 10s linear infinite;
}

@keyframes marquee {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
}

.scroll-container {
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #010152ff;
}

.scroll-wrapper {
  width: 100%;
  overflow-x: auto;
  scroll-behavior: smooth;
  display: flex;
}

.scroll-content {
  display: flex;
  flex-wrap: nowrap;
}

.custom-card1 {
  min-width: 200px;
  max-width: 250px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  transition: transform 0.3s ease-in-out;
}

.custom-card1:hover {
  transform: scale(1.05);
}

.scroll-wrapper::-webkit-scrollbar {
  display: none;
}

.content-box {
  background-color: #e0e0e0;
  border-radius: 8px;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  animation: fadeIn 1s forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 600px) {
  .scroll-wrapper {
    width: 100%;
  }
}
.footer {
  background-color: rgb(11, 11, 56);
  color: white;
  padding: 20px;
  text-align: center;
}

.contact-link {
  color: #1e90ff;
  text-decoration: none;
  font-weight: bold;
  margin: 0 10px;
}
.contact-link:hover {
  text-decoration: underline;
}

.fade-in {
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.slide-up {
  animation: slideUp 1s ease-in;
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
