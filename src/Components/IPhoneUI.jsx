import React from "react";
import "./CSS/style.css";
import "./CommonJS.js";
import $ from "jquery";

import icon from "../Assets/musicIcon.jpeg";

import {
  BsFillCaretLeftFill,
  BsFillCaretRightFill,
  BsPauseFill,
} from "react-icons/bs";

export default class IPhoneUI extends React.Component {
  componentDidMount() {
    this.Animate();
    this.clock();
    // this.network();
  }

  //   network = () => {
  //     $("#network").each(function () {
  //       var h = Math.floor(Math.random() * 25) + 2;
  //       $(this).css("height", h);
  //       $(this).css("transition", "height 0.2s linear");
  //     });
  //   };

  clock = () => {
    var dateObj = new Date();
    var hrs = dateObj.getHours();
    var mins = dateObj.getMinutes();
    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;

    var time = hrs + ":" + mins;

    $("#time").text(time);
    setTimeout(() => this.clock(), 1000);
  };

  Animate = () => {
    $(".line").each(function () {
      var h = Math.floor(Math.random() * 25) + 2;
      $(this).css("height", h);
      $(this).css("transition", "height 0.2s linear");
    });
    setTimeout(() => {
      this.Animate();
    }, 200);
  };

  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <div
          style={{
            background: "rgb(34,193,195)",
            background:
              "linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(253,187,45,0.7527871011685925) 100%)",
            backgroundColor: "#D9D9D9",
            width: "450px",
            height: "550px",
            borderTopLeftRadius: "80px",
            borderTopRightRadius: "80px",
            border: "15px solid black",
            borderBottom: "none",
            boxShadow: "0 0 0 5px #808080,0 0 0 6px white",
            position: "relative",
          }}
        >
          <div
            style={{ ...styles.flex, position: "relative" }}
            className="parent"
          >
            <div
              id="time"
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                position: "absolute",
                left: "40px",
                top: "22.5px",
                color: "white",
              }}
            >
              00:00
            </div>
            <MusicPlayer />
            <div
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                position: "absolute",
                right: "80px",
                top: "25px",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
              id="networkParent"
            >
              <div
                id="network"
                style={{
                  height: "6px",
                  width: "5px",
                  backgroundColor: "white",
                  marginLeft: "2px",
                }}
              ></div>
              <div
                id="network"
                style={{
                  height: "10px",
                  width: "5px",
                  backgroundColor: "white",
                  marginLeft: "2px",
                }}
              ></div>
              <div
                id="network"
                style={{
                  height: "14px",
                  width: "5px",
                  backgroundColor: "white",
                  marginLeft: "2px",
                }}
              ></div>
              <div
                id="network"
                style={{
                  height: "18px",
                  width: "5px",
                  backgroundColor: "white",
                  marginLeft: "2px",
                }}
              ></div>
            </div>
            <div>
              <div
                style={{
                  width: "30px",
                  height: "10px",
                  backgroundColor: "transparent",
                  border: "4px solid white",
                  borderRadius: "6px",
                  position: "absolute",
                  right: "30px",
                  top: "25px",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
                id="battery"
              >
                <div
                  style={{
                    width: "10px",
                    backgroundColor: "white",
                    height: "9px",
                    position: "relative",
                    left: "1px ",
                    borderRadius: "2px",
                  }}
                ></div>
              </div>
            </div>
          </div>
          {/* <div
            style={{
              position: "relative",
              top: "200px",
              height: "100px",
              margin: "20px",
              borderRadius: "20px",
            }}
          ></div> */}
        </div>
      </div>
    );
  }
}

const styles = {
  flex: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: "transparent",
  },
  noBG: {
    backgroundColor: "transparent",
  },
};

function MusicPlayer(e) {
  return (
    <div
      //   className="notch"
      className="notchDefault expand"
      id="musicPlayer"
      onClick={() => {
        //default : notchDefault expand
        //onClick First Time : notchDefault musicPlayerOpen
        //onCLick second time : notchDefault musicPLayerClose
        var musicPlayer = document.getElementById("musicPlayer").classList;

        if (musicPlayer.contains("expand"))
          document.getElementById("musicPlayer").classList.remove("expand");

        if (musicPlayer.contains("musicPlayerOpen")) {
          musicPlayer.remove("musicPlayerOpen");
          musicPlayer.add("musicPlayerClose");

          $("#musicIcon").css("width", "25px");
          $("#musicIcon").css("height", "25px");
          $("#musicPlayerHead").css("margin", "7.5px 15px 7.5px 15px");

          $("#musicIcon").css(
            "transition",
            "width 0.3s linear , height 0.3s linear , "
          );
          $("#musicPlayerHead").css("transition", "margin 0.1s linear");
          $("#musicName").css("display", "none");
          $("#musicArtist").css("display", "none");

          $("#musicDetails").css("top", "-10px");
          $("#musicDetails").css("opacity", "0");

          $("#musicTimer").css("visibility", "hidden");

          $(".hidden").css("top", "-10px");
          $(".hidden").css("opacity", "0");
          $(".hidden").css("transition", "opacity 0s linear");
        } else {
          musicPlayer.remove("musicPlayerClose");
          musicPlayer.add("musicPlayerOpen");

          $("#musicPlayerHead").css("margin", "30px");
          $("#musicName").css("display", "block");
          $("#musicArtist").css("display", "block");

          $("#musicDetails").css("top", "0px");
          $("#musicDetails").css("opacity", "1");
          $("#musicDetails").css(
            "transition",
            "top 0.2s linear , opacity 0.3s linear"
          );

          $("#musicTimer").css("visibility", "visible");
          $("#musicProgressBar").css("width", "100%");

          $("#musicProgressBar").css("transition", "width 180s linear");

          $("#musicPlayer").css(
            "box-shadow",
            "0px 19px 50px 39px rgba(0,0,0,0.1)"
          );

          $("#musicPlayerHead").css(
            "transition",
            "align-items 0.1s linear , margin 0.1s linear"
          );
          // music Icon resizing
          $("#musicIcon").css("width", "50px");
          $("#musicIcon").css("height", "50px");
          $("#musicIcon").css(
            "transition",
            "width 0.1s linear , height 0.1s linear"
          );

          $(".hidden").css("top", "0px");
          $(".hidden").css("opacity", "1");
          $(".hidden").css(
            "transition",
            "top 0.2s linear , opacity 0.3s linear"
          );
        }
      }}
      style={{
        // height: "220px",
        // width: "420px",
        zIndex: 1000000,
        margin: "15px",
        borderRadius: "50px",
        backgroundColor: "black",
      }}
    >
      <div
        id="musicPlayerHead"
        style={{
          backgroundColor: "transparent",
          //   width: "100%",
          height: "100%",
          marginTop: "7.5px",
          marginLeft: "15px",
          marginRight: "15px",
          //   display: "flex",
          //   alignItems: "flex-start",
          //   justifyContent: "space-between",
        }}
      >
        <div
          id="musicPlayerBig"
          style={{
            backgroundColor: "transparent",

            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              ...styles.noBG,
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <div
              className="musicIcon"
              id="musicIcon"
              style={{
                width: "25px",
                height: "25px",
                backgroundColor: "#D9D9D9",
                borderRadius: "5px",
              }}
            >
              <img
                src={icon}
                style={{ width: "100%", height: "100%", borderRadius: "5px" }}
              />
            </div>
            <div
              id="musicDetails"
              style={{
                position: "relative",
                top: "-10px",
                opacity: "0",
                ...styles.noBG,
              }}
              className="hidden"
            >
              <div
                style={{
                  ...styles.noBG,
                  color: "white",
                  display: "none",
                  marginLeft: "10px",
                  fontWeight: "bold",
                }}
                id="musicName"
              >
                Kanave Kanave
              </div>
              <div
                style={{
                  ...styles.noBG,
                  color: "white",
                  display: "none",
                  marginLeft: "10px",
                  fontWeight: "bold",
                  fontSize: "10px",
                }}
                id="musicArtist"
              >
                Anirudh R
              </div>
            </div>
          </div>
          <div className="center">
            <div className="head">
              <div className="line" id="line1"></div>
              <div className="line" id="line2"></div>
              <div className="line" id="line3"></div>
              <div className="line" id="line4"></div>
              <div className="line" id="line5"></div>
              <div className="line" id="line6"></div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "100%",
            marginTop: "25px",
            visibility: "hidden",
          }}
          id="musicTimer"
          className="hidden"
        >
          <div style={{ fontSize: "10px", fontWeight: "bold", color: "white" }}>
            1:26
          </div>
          <div
            style={{
              width: "90%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "#808080",
                width: "90%",
                height: "5px",
                position: "relative",

                borderRadius: "10px",
              }}
            >
              <div
                id="musicProgressBar"
                style={{
                  backgroundColor: "#fff",
                  width: "10%",
                  height: "5px",
                  borderRadius: "10px",
                  position: "absolute",
                  left: "0",
                }}
              ></div>
            </div>
          </div>
          <div style={{ fontSize: "10px", fontWeight: "bold", color: "white" }}>
            3:54
          </div>
        </div>
        <div
          className="hidden"
          style={{
            opacity: 0,
            marginTop: "30px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Previous Icon0 */}
            <div
              style={{
                width: "50px",
                display: "flex",
                alignItems: "center",
              }}
              onClick={(e) => preventClose(e)}
            >
              <BsFillCaretLeftFill color="white" size={40} />
              <BsFillCaretLeftFill
                size={40}
                color="white"
                style={{ position: "relative", left: "-15px" }}
              />
            </div>
            <div
              style={{
                position: "relative",
                left: "-4%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={(e) => preventClose(e)}
            >
              <BsPauseFill color="white" size={40} />
            </div>
            <div
              style={{
                width: "50px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={(e) => preventClose(e)}
            >
              <BsFillCaretRightFill color="white" size={40} />
              <BsFillCaretRightFill
                size={40}
                color="white"
                style={{ position: "relative", right: "15px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const preventClose = (e) => {
  e.stopPropagation();
};
