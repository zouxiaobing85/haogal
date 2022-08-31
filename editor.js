(function() {
     /* Register the buttons */
     tinymce.create('tinymce.plugins.MyButtons', {
          init : function(ed, url) {
               /**
               * Inserts shortcode content
               */
               ed.addButton( 'button_ckplayer', {
                    text : '',
                    icon: 'wp-media-library',
                    title : '插入ckplayer视频',
                    onclick : function() {
                         ed.windowManager.open( {
                              title: '视频地址',
                              body: [{
                                   type: 'textbox',
                                   name: 'videoSrc',
                                   label: false,
                                   value: '',
                                   multiline: true,
                                   minWidth: 300,
                                   minHeight: 100
                              }],
                              onsubmit: function( e ) {
                                   ed.selection.setContent('[ckplayer]'+e.data.videoSrc+'[/ckplayer]');
                              }
                         });
                    }
               });
          },
          createControl : function(n, cm) {
               return null;
          },
     });
     /* Start the buttons */
     tinymce.PluginManager.add( 'mobantu_button_script', tinymce.plugins.MyButtons );
})();