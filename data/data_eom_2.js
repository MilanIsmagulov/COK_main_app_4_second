window.dataLoaded = false;
let title_of_eom = themeOfDEC;
const data = {
    "index_1":{
        "subtitle": "Изучите правила охраны труда и окружающей среды на установке деасфальтизации гудронов пропаном.",
        "step_of_popup": "Изучите правила охраны труда и окружающей среды на установке деасфальтизации гудронов пропаном.",
        "paragraph_1":[
            {"image": true, "image_path": "./content/page_content/img1.png","img_sign": " ", "left_img": false, "no_sgn": true},
            {"text": `Для исключения травмирования рабочих на установке, необходимо соблюдать <b> правила охраны труда и техники безопасности:</b>
               <ol class="ol_custom">
                   <li>Не приступать к работе без использования индивидуальных средств защиты;</li>
                   <li>Быть внимательными при работе с движущимися и вращающимися частями аппаратов;</li>
                   <li>Не прикасаться к нагретым частям аппаратов</li>
                   <li>Соблюдать правила техники безопасности.</li>
                </ol>`},
            {"text": `Для <b> исключения негативного влияния </b> на окружающую среду отслеживать:
               <ol class="ol_custom">
                   <li>Сбор и промышленных сточных вод в систему утилизации, с предварительной очисткой;</li>
                   <li>Минимизировать и не превышать предельно-допустимых концентраций в атмосфере всех ингредиентов,  которые выбрасываются на установке;</li>
                   <li>Первичная переработка и утилизация промышленных отходов.</li>
                </ol>`}   
            //{"text2": "<b class='blue_header big_rectangle'>I. Общие положения</b>"},
        ]
    },
    "index_2":{
        "subtitle": "Изучите направление движения фаз в процессе деасфальтизации.",
        "step_of_popup": "Изучите направление движения фаз в процессе деасфальтизации",
        "paragraph_1":[
            {"text": `Сырье подается в верхнюю часть экстрактора, растворитель в нижнюю часть, в результате контактирования фаз, с верха экстрактора выводится раствор целевого продукта, с низа раствор побочного продукта:`}
        ],
        "paragraph_2":[
            {"image": true, "image_path": "./content/page_content/img2.png","img_sign": " ", "left_img": false, "no_sgn": true}
        ],
    },
    "index_3":{
        "subtitle": "Определите по схеме направления необходимых потоков.<br> <b class='grey_header'> Сырье –<b> гудрон</b><br>Растворитель – <b>жидкий пропан;</b><br> Целевой продукт – <b>деасфальтизат;</b><br> Побочный продукт – <b> асфальт</b> </b>",
        "step_of_popup": "Определите по схеме направления необходимых потоков",
        "test":[
            {"type": 3},
            {"image": true, "image_path": "./content/tests_content/03_01.png"},
            {"answers": [
                "Гудрон",
                "Пропан",
                "Раствор деасфальтизата",
                "Раствор асфальта"
            ]}
        ]
    },
    "index_4":{
        "subtitle": "Изучите исходные данные для расчета материального баланса и формулу для определения  количественного определения прихода и расхода.",
        "step_of_popup": "Изучите исходные данные для расчета материального баланса и формулу для определения  количественного определения прихода и расхода.",
        "paragraph_1":[
            {"text": `Количество веществ (приход и расход ) определяется по формуле в зависимости от производительности установки:`},
            {"text2": "<p class='formula_custom'><img src='./content/page_content/img3.png'></p>"},
            {"text": `Q – количество вещества;<br>
                      N – % масс. на сырье;<br>
                      Q<sub>г</sub> – производительность установки по сырью`}
        ],
        "paragraph_2":[
            {"text": `<b class="blue_header">Производительность установки</b> – Qг = 65000 кг/сут`},
        ],
        "paragraph_3":[
            {"image": true, "image_path": "./content/page_content/img4.png","img_sign": " ", "left_img": false, "no_sgn": true}
        ],
    },
    "index_5":{
        "subtitle": "Определите количественную составляющую растворителя и продуктов, получаемых на установке, зависимости от их % содержания масс. на сырье",
        "step_of_popup": "Определите количественную составляющую растворителя и продуктов, получаемых на установке, зависимости от их % содержания масс. на сырье",
        "test":[
            {"type": 2},
            {"description": `Количество веществ (приход и расход )определяется по формуле в зависимости от производительности установки <br>
                             <img src='./content/tests_content/05_01.png'><br>
                             Производительность установки – Q<sub>г</sub> = 95000 кг/сут.<br>
                             <img style='width:95%' src='./content/tests_content/05_02.png'>`},
            {"test_with_text_2": 
                `Q<sub>г</sub> = {=95000}<br>
                 Q<sub>п</sub> = {=380000}<br> 
                 Q<sub>общ</sub> = {=475000}<br> 
                 Qд<sub>р-р</sub> = {=256500}<br> 
                 Qa<sub>р-р</sub> = {=313500}<br> 
                 Q<sub>расх</sub> = {=475000}<br>`},
            {"image": false, "image_path": "./content/page_content/empty_img.png"}
        ],
    },
    "index_6":{
        "subtitle": "Определите количественную составляющую растворителя и продуктов, получаемых на установке, зависимости от их % содержания масс. на сырье",
        "step_of_popup": "Определите количественную составляющую растворителя и продуктов, получаемых на установке, зависимости от их % содержания масс. на сырье",
        "test":[
            {"type": 2},
            {"description": `Количество веществ (приход и расход )определяется по формуле в зависимости от производительности установки <br>
                             <img src='./content/tests_content/06_01.png'><br>
                             Производительность установки – Q<sub>г</sub> = 120000 кг/сут.<br>
                             <img style='width:95%' src='./content/tests_content/06_02.png'>`},
            {"test_with_text_2": 
                `Q<sub>г</sub> = {=120000}<br>
                 Q<sub>п</sub> = {=240000}<br> 
                 Q<sub>общ</sub> = {=360000}<br> 
                 Qд<sub>р-р</sub> = {=144000}<br> 
                 Qa<sub>р-р</sub> = {=216000}<br> 
                 Q<sub>расх</sub> = {=360000}<br>`},
            {"image": false, "image_path": "./content/page_content/empty_img.png"}
        ],
    },
    "index_7":{
        "subtitle": "Изучите методику расчета экстракционной колонны процесса деасфальтизации гудрона пропаном.",
        "step_of_popup": "Изучите методику расчета экстракционной колонны процесса деасфальтизации гудрона пропаном",
        "paragraph_1": [
            {"text": "При определении параметров экстракционных колонн используются следующие формулы:"},
            {"text": "<b class='blue_header'>1. Диаметр колонны</b>"}
        ],
        "paragraph_2": [
            {"text2": "<p class='formula_custom'><img src='./content/page_content/img7_1.png'></p>"},
            {"text": 
                `где<br>
                Q<sub>г</sub> – производительность установки по сырью в кг/ч;<br>
                Q<sub>п</sub> – количество пропана, вводимого в экстракционную колонну, в кг/ч;<br>
                ρ<sub>г</sub> – плотность сырья при средней температуре в экстракционной колонне в кг/м<sup>3</sup>;<br>
                ρ<sub>п</sub> – плотность жидкого пропана при средней температуре в экстракционной колонне в кг/м<sup>3</sup>;<br>
                V – скорость потока смеси в экстракционной части колонны, 35-40 м<sup>3</sup>/м<sup>2</sup>·ч`}
        ],
        "paragraph_3": [
            {"text": "<b class='blue_header'>2. Количество пропана вводимое в колонну</b>"}
        ],
        "paragraph_4": [
            {"text2": "<p class='formula_custom'><img src='./content/page_content/img7_2.png'></p>"},
            {"text": 
                `где<br>
                 n – соотношение пропан: гудрон.`}
            // {"text":`<div class='two_img_custom'>
            //     <div>
            //         <img src='./content/page_content/img10.png'>
            //         <p><b>а)</b> «звезда» «треугольник»</p>
            //     </div>
            //     <div>
            //         <img src='./content/page_content/img11.png'>
            //          <p><b>б)</b> «треугольник» «звезда» </p>
            //     </div>
            //     </div>`}
        ],
        "paragraph_5": [
            {"text": "<b class='blue_header'>3. Высота экстракционной колонны</b>"},
            {"text2": "<p class='formula_custom'><img src='./content/page_content/img7_3.png'></p>"},
            {"text": 
                `где<br>
                h1 – высота опорной обечайки, 1,0-1,2 м;<br>
                h2 – расстояние от днища до жалюзийной тарелки, 3,0-3,2 м;<br>
                h3 – высота жалюзийной тарелки, м;<br>
                h4 – расстояние от насадки до верха экстракционной части колонны, 3,3-3,5 м;<br>
                h5 – высота отстойной части колонны, м.`}
        ],
        "paragraph_6": [
            {"text": "<b class='blue_header'>4. Высота насадочного слоя</b>"},
            {"text2": "<p class='formula_custom'><img src='./content/page_content/img7_4.png'></p>"},
            {"text": 
                `где<br>
                t1 – время контакта сырья и пропана в насадочном слое, 110-130 сек;<br>
                W1 – линейная скорость потока в насадочном слое, 0,046-0,056 м/сек.<br>`}
        ],
        "paragraph_7": [
            {"text": "<b class='blue_header'>5. Высота отстойной части</b>"},
            {"text2": "<p class='formula_custom'><img src='./content/page_content/img7_5.png'></p>"},
            {"text": 
                `где<br>
                t2 – время контакта сырья и пропана в насадочном слое, 110-130 сек;<br>
                W2 – линейная скорость потока в насадочном слое, 0,046-0,056 м/сек.<br>`}
        ]
    },
    "index_8":{
        "subtitle": "Установите соответствие между формулами и названиями параметров, для определения которых они используются",
        "step_of_popup": "Установите соответствие между формулами и названиями параметров, для определения которых они используются",
        "test":[
            {"type": 9},
            {"description": " "},
            {"definitions": [
                "<p class='popup_zoom_plc'><img class='answer_or_definition_img' src='./content/tests_content/08_02.png' alt='1'></p>",
                "<p class='popup_zoom_plc'><img class='answer_or_definition_img' src='./content/tests_content/08_01.png' alt='1'></p>",
                "<p class='popup_zoom_plc'><img class='answer_or_definition_img' src='./content/tests_content/08_04.png' alt='1'></p>",
                "<p class='popup_zoom_plc'><img class='answer_or_definition_img' src='./content/tests_content/08_03.png' alt='1'></p>",
                "<p class='popup_zoom_plc'><img class='answer_or_definition_img' src='./content/tests_content/08_05.png' alt='1'></p>"
            ]},
            {"answers": [
                "<p class='popup_zoom_plc zoom_paragraph'><span class='p_custom'>Количество пропана, вводимое в колонну</span></p>",
                "<p class='popup_zoom_plc zoom_paragraph'><span class='p_custom'>Диаметр колонны</span></p>",
                "<p class='popup_zoom_plc zoom_paragraph'><span class='p_custom'>Высота экстракционной колонны</span></p>",
                "<p class='popup_zoom_plc zoom_paragraph'><span class='p_custom'>Высота отстойной части</span></p>",
                "<p class='popup_zoom_plc zoom_paragraph'><span class='p_custom'>Высота насадочного слоя</span></p>"
            ]},
            {"correct_answer_type_10": [2, 1, 4, 3, 5]},
            {"image": true, "image_path": "./content/tests_content/empty_img.png", "image_sgn": "blablabla"}
        ],
    },
    "index_9":{
        "subtitle": "Ознакомьтесь с примером расчета параметров экстракционной колонны.",
        "step_of_popup": "Ознакомьтесь с примером расчета параметров экстракционной колонны",
        "paragraph_1": [
            {"text": "<b class='blue_header'>Задача: </b>Определить диаметр D и высоту экстрактора H"},
            {"text": "<b>Исходные данные:</b>"},
            {"text": `<table class='table_custom'>
                        <tr>
                            <td><b>Производительность установки Q<sub>г</sub></b></td>
                            <td>400т/сут</td>
                        </tr>
                        <tr>
                            <td><b>Соотношение</b></td>
                            <td>5:1</td>
                        </tr>
                        <tr>
                            <td><b>Температура экстракционной части <br>Верх</b></td>
                            <td>50 °С</td>
                        </tr>
                        <tr>
                            <td><b>Низ</b></td>
                            <td>44 °С</td>
                        </tr>
                    </table>`},
            {"text": "<b>Порядок расчета:</b>"},
        ],
        "paragraph_2": [
            {"text": "<b class='blue_header'>1. Производительность установки по сырью</b>"},
            {"text2": "<p class='formula_custom'><img  src='./content/page_content/img9_1.png'></p>"},
            {"text": "<b class='blue_header'>2. Количество пропана</b>"},
            {"text2": "<p class='formula_custom'><img  src='./content/page_content/img9_2.png'></p>"},
            {"text": "<b class='blue_header'>3. Средняя температура потока смеси в экстракторе</b>"},
            {"text2": "<p class='formula_custom'><img  src='./content/page_content/img9_3.png'></p>"},
            {"text": "<b class='blue_header'>4. Используя табличные данные, определим плотность гудрона и плотность пропана при температуре 47 °С</b>"},
            {"text2": "<p class='formula_custom'><img  src='./content/page_content/img9_4.png'></p>"},
            {"text": "<b class='blue_header'>5. Диаметр экстрактора</b>"},
            {"text2": "<p class='formula_custom'><img  src='./content/page_content/img9_5.png'></p>"},
            {"text": "<b class='blue_header'>6. Высота насадочного слоя</b>"},
            {"text2": "<p class='formula_custom'><img  src='./content/page_content/img9_6.png'></p>"},
            {"text": "<b class='blue_header'>7. Высота отстойной части</b>"},
            {"text2": "<p class='formula_custom'><img  src='./content/page_content/img9_7.png'></p>"},
            {"text": "<b class='blue_header'>8. Высота экстрактора</b>"},
            {"text2": "<p class='formula_custom'><img  src='./content/page_content/img9_8.png'></p>"},
        ],
    },
    "index_10":{
        "subtitle": "Выполните расчет параметров экстракционной колонны и запишите найденные вами значения",
        "step_of_popup": "Выполните расчет параметров экстракционной колонны и запишите найденные вами значения",
        "test":[
            {"type": 2},
            {"description": `Задача: Определить производительность установки Q<sub>г</sub><br>
                             Исходные данные:<br>
                             <img style='width:95%' src='./content/tests_content/10_01.png'><br>
                             Порядок расчета:<br>
                             <img style='width:95%' src='./content/tests_content/10_02.png'>`},
            {"test_with_text_2": 
                `1. Средняя температура потока смеси в экстракторе = {=65}<br>
                 2. Плотность гудрона = {=932}<br> 
                 3. Плотность пропана = {=442}<br> 
                 4. Производительность установки = {=670000}<br>`},
            {"image": false, "image_path": "./content/page_content/empty_img.png"}
        ],
    },
    "index_11": {
        "subtitle": "Результаты",
        "step_of_popup": "Результаты",
        "result": []
    }
}
window.dataLoaded = true;