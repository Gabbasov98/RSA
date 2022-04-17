$(document).ready(function() {

    $(".calc__category").click(function() {
        setTab($(this), "calc__category", "calc__subcategories")
    })

    $(".calc__subcategory").click(function() {
        let path = $(this).attr("data-tab-path")
        let parent = $(".calc__subcategories")
        $(parent).find(`.calc__subcategory`).removeClass(`calc__subcategory--active`)
        $(parent).find(`.calc__subcategory[data-tab-path="${path}"]`).addClass(`calc__subcategory--active`)
        $(parent).find(`.calc__subcategories-content`).removeClass(`calc__subcategories-content--active`)
        $(parent).find(`.calc__subcategories-content[data-tab-path="${path}"]`).addClass(`calc__subcategories-content--active`)
    })


    $("[data-alert-id]").change(function() {
        let checked = $(this).prop("checked")
        let alert = {
            id: $(this).attr("data-alert-id"),
            title: $(this).attr("data-alert-title"),
            desc: $(this).attr("data-alert-desc"),
            price: +$(this).attr("data-alert-price"),
            days: +$(this).attr("data-alert-days"),
        }
        if (checked) {
            addAlert(alert)
        } else {
            removeAlert(alert)
        }
    })

    $(".calc-service__tab").click(function() {

    })

    $(".calc-service__tab").click(function() {
        let path = $(this).attr("data-tab-path")
        $(".calc-service").find(`.calc-service__tab`).removeClass(`calc-service__tab--active`)
        $(".calc-service").find(`.calc-service__tab[data-tab-path="${path}"]`).addClass(`calc-service__tab--active`)
        $(".calc-service").find(`.calc-service__img-car`).removeClass(`calc-service__img-car--active`)
        $(".calc-service").find(`.calc-service__img-car[data-tab-path="${path}"]`).addClass(`calc-service__img-car--active`)
    })



});

let alerts = []
let sum = 0
let days = 0

function addAlert(alert) {
    alertInArray = alerts.includes(alert);
    if (!alertInArray) {
        alerts.push(alert)
    }

    let alertBlock = `
        <div id="${alert.id}" class="calc-service__alert">
            <img src="img/check2.svg" alt="">
            <div class="calc-service__alert-text">
                <strong>${alert.title}:</strong>
                <span>${alert.desc}</span>
            </div>
            <button class="calc-service__alert-close">
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.67545 4.50743L0.171028 1.00289C-0.0570345 0.77494 -0.0570345 0.406368 0.171028 0.178413C0.398983 -0.0495425 0.767555 -0.0495425 0.995511 0.178413L4.50004 3.68294L8.00447 0.178413C8.23253 -0.0495425 8.601 -0.0495425 8.82895 0.178413C9.05702 0.406368 9.05702 0.77494 8.82895 1.00289L5.32453 4.50743L8.82895 8.01196C9.05702 8.23991 9.05702 8.60848 8.82895 8.83644C8.71535 8.95015 8.56598 9.00727 8.41671 9.00727C8.26745 9.00727 8.11818 8.95015 8.00447 8.83644L4.50004 5.33191L0.995511 8.83644C0.8818 8.95015 0.732534 9.00727 0.583269 9.00727C0.434004 9.00727 0.284739 8.95015 0.171028 8.83644C-0.0570345 8.60848 -0.0570345 8.23991 0.171028 8.01196L3.67545 4.50743Z" fill="#C0C0C0"/>
                </svg>
            </button>
        </div>
    `
    sum = sum + alert.price
    days = days + alert.days

    $(".calc-service__alerts").append(alertBlock)
    $(".calc-service__alert-close").click(function() {
        closeAlert($(this))
    })
    setPrice()
    setDays()
}

function removeAlert(alert) {
    if (alert.id) {
        $(`[data-alert-id="${alert.id}"]`).prop("checked", false)
    }

    alerts = alerts.filter(item => item.id !== alert.id)
    sum = sum - alert.price
    days = days - alert.days
    $(`#${alert.id}`).remove()

    setPrice()
    setDays()
}

function setPrice() {
    let formattedSum = sum.toLocaleString("ru-RU");
    $(".calc-service__sum-price-digits").html(formattedSum)
}

function setDays() {
    let lastDigit = +days.toString().slice(-1)
    let displayedData = ''

    if (lastDigit === 1) {
        displayedData = `${days} день`
    } else if (days === 12 || days === 13 || days === 14) {
        displayedData = `${days} дней`
    } else if (lastDigit === 2 || lastDigit === 3 || lastDigit === 4) {
        displayedData = `${days} дня`
    } else {
        displayedData = `${days} дней`
    }


    $(".calc-service__sum-days-digits").html(displayedData)
}

function closeAlert(el) {
    let id = $(el).parents(".calc-service__alert").attr("id")

    let alert = alerts.find(item => item.id === id)
    removeAlert(alert)
}