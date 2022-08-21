 <template>
  <div class="footer_wrap">
    <!-- Footer Start -->
    <div class="app-footer">
      <div
        class="footer-bottom d-flex flex-column flex-sm-row align-items-center"
      >
          <div class="d-flex align-items-center">
              <div>
                  <div>
                      <p class="m-0">&copy; 2014 CAEDU.CO.KR.</p>
                      <p class="m-0">All rights reserved</p>
                  </div>


     
                <div>

              
              </div>
            </div>
     
          </div>


      <div class="d-flex ml-auto align-items-center ">
              <span variant="default m-1" @click="changeLang('bn')">
              <flag iso="BD" />
            </span>
            <span variant="default m-1" @click="changeLang('en')">
              <flag iso="US" />
            </span>
            <span variant="default m-1" @click="changeLang('de')">
              <flag iso="DE" />
            </span>
            </div>
          
      </div>
      <!-- fotter end -->


             
      
    </div>
    
  </div>


  
</template> 
<script>
export default {
  data() {
    return {};
  },
  methods: {
       changeLang(lang) {
      console.log(lang);
      this.$i18n.locale = lang;
    },
  }
};
</script>


<style lang="scss" scoped>
</style> 