// Copyright (c) 2010-2020 vru.ro
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF // 
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR 
// ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
// SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

function vru_open() {
  document.getElementById("mySidebar").style.display = "block";
}
 
function vru_close() {
  document.getElementById("mySidebar").style.display = "none";
}

function NAV() {
  document.getElementById("vru-meniu").classList.toggle("show");
}

function NAV1() {
  document.getElementById("vru-meniu-1").classList.toggle("show");
}

function NAV2() {
  document.getElementById("vru-meniu-2").classList.toggle("show");
}

function NAV3() {
  document.getElementById("vru-meniu-3").classList.toggle("show");
}

function NAV4() {
  document.getElementById("vru-meniu-4").classList.toggle("show");
}

function NAV5() {
  document.getElementById("vru-meniu-5").classList.toggle("show");
}

function NAV6() {
  document.getElementById("vru-meniu-6").classList.toggle("show");
}

function NAV7() {
  document.getElementById("vru-meniu-7").classList.toggle("show");
}

function NAV8() {
  document.getElementById("vru-meniu-8").classList.toggle("show");
}

function NAV9() {
  document.getElementById("vru-meniu-9").classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.submenu-vru')) {
    var dropdowns = document.getElementsByClassName("vru-sub-menu-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 
