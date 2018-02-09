/////////////////////////////////////////////////////////////
// MODAL
/////////////////////////////////////////////////////////////
$('#modalDonation')
  .on('show.bs.modal', function (e) {
    document.querySelector("html").style.overflow = "inherit";
  })
  .on('hide.bs.modal', function (e) {
    document.querySelector("html").style.overflow = "initial";
  })

/////////////////////////////////////////////////////////////
// ANCHORS
/////////////////////////////////////////////////////////////
anchors.options = {
  placement: 'left',
  icon: ''
};
anchors.add('.anchors h3, .anchors h4, .anchors h5, .anchors h6');

/////////////////////////////////////////////////////////////
// TOC
/////////////////////////////////////////////////////////////
tocbot.init({
  tocSelector: '#toc',
  contentSelector: 'article',
  headingSelector: '.anchors h3, .anchors h4, .anchors h5, .anchors h6',
  collapseDepth: 6,
  activeLinkClass: '',
  ignoreSelector: '.toc-ignore',
});
