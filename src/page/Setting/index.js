
import Header1 from "../../component/Header1";
import VietNam from "../../assets/vietnam.png"


import "./Setting.css"

function Setting()
{
  console.log(VietNam)
    return (
          <div className="conTainer-setting">
            <Header1/>
            <div className="content1Setting">
                <div className="content1Setting__top d-flex">
                  <div className="content1Setting__top-avatar d-flex align-items-center justify-content-center ">
                      <div className="SettingTopAvatar-area rounded-circle ">
                        <img src="https://i.pinimg.com/originals/03/a4/28/03a428ee705240475480c7722c6c2b3b.gif" alt="" className="SettingTopAvatar-area__img rounded-circle"/>
                        <label className="SettingTopAvatar-area__camera d-flex align-items-center justify-content-center rounded-circle" for="changeAvatar">
                          <i className="camera-icon fa-solid fa-camera"></i>
                        </label>
                        
                      </div>
                      <input type="file" id="changeAvatar" className="d-none"/>
                      
                  </div>
                  <div className="content1Setting__top-descrip d-flex flex-column">
                      <span className="SettingTopDescrip__arow"></span>
                      <input  className="SettingTopDescrip__name" value="Nguyen Le Minh Bao"/>
                      <div className="SettingTopDescrip__email d-flex align-items-center my-2">
                        <i class="SettingTopDescrip__email-icon fa-solid fa-envelope"></i>
                        <input  className="SettingTopDescrip__email-text" value="bao.nguyenleminhbaott5@hcmut.edu.vn"/>
                      </div>
                      <div className="SettingTopDescrip__sex d-flex align-items-center my-2">
                        <i class="SettingTopDescrip__sex-icon fa-solid fa-user"></i>
                        <div className="SettingTopDescrip__sex-option">
                          <button className="SettingTopDescrip__sex-option__btn">
                            <i className="male-icon fa-solid fa-venus"></i>
                          </button>
                          <button className="SettingTopDescrip__sex-option__btn">
                            <i className="female-icon fa-solid fa-mars-stroke"></i>
                          </button>
                        </div>
                      </div>
                      <div class="SettingTopDescrip__lang d-flex align-items-center my-2">
                        <i className="SettingTopDescrip__lang-icon fa-solid fa-language"></i>
                        <div class="SettingTopDescrip__lang-area d-flex align-items-center" >
                            <img src={VietNam} class="SettingTopDescrip__lang-area__img mx-1"/>
                            <span className="SettingTopDescrip__lang-area__text mx-2">Viet Nam</span>
                        </div>
                      </div>
                      
                      
                      <textarea className="SettingTopDescrip__descrip" >
                          Buồn đời đầy rẫy vô duyên,
                          Gái đẹp đi hết, trai thì yêu nhau. 
                          Trăng tàn thế tận tới rồi, 
                          Bao đôi trai gái, ngồi chờ nắm tay. 
                          Ta thì chẳng có gấu đâu, 
                          Đằng nào cũng chết, chả ham làm gì. 
                           
                          Học hành như khói như mây, 
                          Chăm học mà cứ lần đần là sao!? 
                          “Thánh nhân đãi kẻ khù khờ”, 
                          Tôi đây cũng chỉ gà mờ đó thôi? 
                          Thán nhân nào hãy hiện ra, 
                          Cứu đời tôi với, bỏ bu nó rồi!

                      </textarea>

                  </div>

                </div>

                <div className="content1Setting__bot d-flex justify-content-end mt-4">
                    <input type="submit" className="content1Setting__bot-sumbit"/>
                </div>
                
            </div>
          </div>
        )
}

export default Setting;