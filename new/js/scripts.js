$(document).ready(function() {

    $('.new-tabs').each(function() {
        var curTabs = $(this);
        var curTabsMenu = curTabs.find('> .new-tabs-menu');
        var curTabsContainer = curTabs.find('> .new-tabs-container');
        var newHTML = '';
        curTabsContainer.find('> .new-tabs-content').each(function() {
            var curTabTitle = $(this).find('> .new-tabs-content-title').html();
            newHTML += '<div class="new-tabs-menu-item"><a href="#">' + curTabTitle + '</a></div> ';
        });
        curTabsContainer.find('> .new-tabs-content').eq(0).addClass('active');
        curTabsMenu.html(newHTML);
        curTabsMenu.find('.new-tabs-menu-item').eq(0).addClass('active');
    });

    $('body').on('click', '.new-tabs-menu-item a', function(e) {
        var curLi = $(this).parent();
        if (!curLi.hasClass('active')) {
            var curTabs = curLi.parents().filter('.new-tabs');
            curTabs.find('.new-tabs-menu-item.active').removeClass('active');
            curLi.addClass('active');
            var curIndex = curTabs.find('.new-tabs-menu-item').index(curLi);
            curTabs.find('.new-tabs-content.active').removeClass('active');
            curTabs.find('.new-tabs-content').eq(curIndex).addClass('active');
        }
        e.preventDefault();
    });

    $('body').on('click', '.new-tabs-content-title', function(e) {
        $(this).parent().toggleClass('open');
    });

    $('body').on('click', '.centers-item-more a', function(e) {
        $(this).parent().parent().toggleClass('more-open');
        e.preventDefault();
    });

    $('body').on('click', '.faq-group-title', function(e) {
        $(this).parent().toggleClass('open');
    });

    $('body').on('click', '.faq-item-title', function(e) {
        $(this).parent().toggleClass('open');
    });

});