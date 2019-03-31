import axios from 'axios'

export const register = (user,url) => {
    axios.put(url,user).then((res) => {
        return res.data;
    })
}   

export const faceMap = {
    "<难过>":"emoji001.png", "<呲牙>":"emoji002.png", "<调皮>":"emoji003.png", "<流汗>":"emoji004.png"
    , "<偷笑>":"emoji005.png", "<玫瑰>":"emoji006.png", "<再见>":"emoji007.png", "<敲打>":"emoji008.png"
    , "<擦汗>":"emoji009.png", "<流泪>":"emoji010.png", "<大哭>":"emoji011.png", "<嘘...>":"emoji012.png"
    , "<酷>":"emoji013.png", "<抓狂>":"emoji0014.png", "<委屈>":"emoji015.png", "<便便>":"emoji016.png"
    , "<菜刀>":"emoji017.png", "<可爱>":"emoji018.png", "<色>":"emoji019.png", "<害羞>":"emoji020.png"
    , "<得意>":"emoji021.png", "<吐>":"emoji022.png", "<微笑>":"emoji023.png", "<发怒>":"emoji024.png"
    , "<尴尬>":"emoji025.png", "<惊恐>":"emoji026.png", "<冷汗>":"emoji027.png", "<白眼>":"emoji028.png"
    , "<傲慢>":"emoji029.png", "<惊讶>":"emoji030.png", "<疑问>":"emoji031.png", "<睡>":"emoji032.png"
    , "<亲亲>":"emoji033.png", "<憨笑>":"emoji034.png", "<爱情>":"emoji035.png", "<憋嘴>":"emoji036.png"
    , "<阴险>":"emoji037.png", "<奋斗>":"emoji038.png", "<发呆>":"emoji039.png", "<右哼哼>":"emoji040.png"
    , "<拥抱>":"emoji041.png", "<坏笑>":"emoji042.png", "<鄙视>":"emoji043.png", "<晕>":"emoji044.png"
    , "<大兵>":"emoji045.png", "<可怜>":"emoji046.png", "<饥饿>":"emoji047.png", "<困>":"emoji048.png"
    , "<咒骂>":"emoji049.png", "<折磨>":"emoji050.png", "<抠鼻>":"emoji051.png", "<鼓掌>":"emoji052.png"
    , "<糗大了>":"emoji053.png", "<左哼哼>":"emoji054.png", "<哈欠>":"emoji055.png", "<快哭了>":"emoji056.png"
    , "<吓>":"emoji057.png", "<篮球>":"emoji058.png", "<乒乓>":"emoji059.png", "<闭嘴>":"emoji060.png"
    , "<托腮>":"emoji061.png", "<眨眼睛>":"emoji062.png", "<泪奔>":"emoji063.png", "<无奈>":"emoji064.png"
    , "<卖萌>":"emoji065.png", "<小纠结>":"emoji066.png", "<喷血>":"emoji067.png", "<斜眼笑>":"emoji068.png"
    , "<doge>":"emoji069.png", "<惊喜>":"emoji070.png", "<骚扰>":"emoji071.png", "<笑哭>":"emoji072.png"
    , "<我最美>":"emoji073.png"
}

