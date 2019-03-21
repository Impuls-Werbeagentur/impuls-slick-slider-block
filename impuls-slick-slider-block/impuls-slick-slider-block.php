<?php
/*
Plugin Name: Impuls Slick Slider Block 
Description: Ein einfacher Image Slider für Gutenberg
Version: 1.1
Author: Impuls Werbeagentur
Author URI: https://www.werbeagentur-impuls.de
*/

function impuls_slick_slider_block_register_block() {
    wp_register_script(
      'slick-slider',
      plugins_url('/blocks/assets/slick.min.js', __FILE__),
      array('jquery'),
      filemtime(plugin_dir_path(__FILE__).'blocks/assets/slick.min.js'),
      true
    );
    wp_register_script(
      'slick-slider-load-frontend',
      plugins_url('/blocks/assets/activate-slick-frontend.js', __FILE__),
      array('jquery','slick-slider'),
      filemtime(plugin_dir_path(__FILE__).'blocks/assets/activate-slick-frontend.js'),
      true
    );
    // Register our block script with WordPress
    wp_register_script(
      'impuls-slick-slider-block',
      plugins_url('/blocks/dist/blocks.build.js', __FILE__),
      array('wp-blocks', 'wp-element','wp-editor','wp-components','wp-compose','lodash','wp-keycodes','wp-i18n','wp-blob','wp-data','slick-slider'),
      filemtime(plugin_dir_path(__FILE__).'blocks/dist/blocks.build.js')
    );
  
    // Register our block's base CSS  
    wp_register_style(
      'impuls-slick-slider-block-style',
      plugins_url( '/blocks/dist/blocks.style.build.css', __FILE__ ),
      array( 'dashicons' )
    );
    
    // Register our block's editor-specific CSS
    wp_register_style(
      'impuls-slick-slider-block-edit-style',
      plugins_url('/blocks/dist/blocks.editor.build.css', __FILE__),
      array( 'wp-edit-blocks' )
    );  
    
    // Enqueue the script in the editor
    register_block_type('impuls-additional-blocks/slick-slider', array(
      'editor_script' => 'impuls-slick-slider-block',
      'editor_style' => 'impuls-slick-slider-block-edit-style',
      'script' => 'slick-slider-load-frontend',
      'style' => 'impuls-slick-slider-block-style',
      'render_callback' => 'impuls_slick_slider_block_render_frontend_block',
    ));
  }
  
  add_action('init', 'impuls_slick_slider_block_register_block');

  add_action( 'enqueue_block_editor_assets', 'impuls_slick_slider_block_enqueue_additional_assets' );

  function impuls_slick_slider_block_enqueue_additional_assets(){
    wp_enqueue_script('slick-slider');
  }

  if(!function_exists('impuls_slick_slider_block_render_frontend_block')){
    function impuls_slick_slider_block_render_frontend_block($atts=array()){
      extract($atts);
      $myClassName = 'slick-slider-block-slider' . ($useBackground ? ' use-background-image' : '');
      $slideroptions = array(
        'data-slick-arrows'=>isset($arrows) ? $arrows:true, 
        'data-slick-dots'=>isset($dots) ? $dots : true, 
        'data-slick-adaptiveHeight'=>$useBackground ? false: ($adaptiveHeight ? $adaptiveHeight:true),
        'data-slick-autoplay'=>isset($autoplay)?$autoplay:false,
        'data-slick-autoplaySpeed'=>$autoplay ? ($autoplaySpeed ? $autoplaySpeed:4000):0,
        'data-slick-centerMode'=>isset($centerMode) ? $centerMode:false,
        'data-slick-centerPadding'=>isset($centerPadding) ? $centerPadding : 0,
        'data-slick-cssEase'=>isset($cssEase) ? $cssEase : 'ease',
        'data-slick-draggable'=>isset($draggable) ? $draggable:true,
        'data-slick-fade'=>isset($fade)? $fade:'false',
        'data-slick-focusOnSelect'=>isset($focusOnSelect)?$focusOnSelect:false,
        'data-slick-easing'=>isset($easing)?$easing:'linear',
        'data-slick-edgeFriction'=>isset($edgeFriction)?$edgeFriction:0.15,
        'data-slick-infinite'=>isset($infinite)?$infinite:true,
        'data-slick-initialSlide'=>isset($initialSlide)?$initialSlide:0,
        'data-slick-pauseOnFocus'=>isset($pauseOnFocus)?$pauseOnFocus:true,
        'data-slick-pauseOnHover'=>isset($pauseOnHover)?$pauseOnHover:true,
        'data-slick-pauseOnDotsHover'=>isset($pauseOnDotsHover)?$pauseOnDotsHover:true,
        'data-slick-slidesToShow'=>isset($slidesToShow)?$slidesToShow:1,
        'data-slick-slidesToScroll'=>isset($slidesToScroll)?$slidesToScroll:1,
        'data-slick-speed'=>isset($speed)?$speed:800,
        'data-slick-swipe'=>isset($swipe)?$swipe:true,
        'data-slick-swipeToSlide'=>isset($swipeToSlide)?$swipeToSlide:false,
        'data-slick-touchMove'=>isset($touchMove)?$touchMove:true,
        'data-slick-touchThreshold'=>isset($touchThreshold)?$touchThreshold:5,
        'data-slick-useCSS'=>isset($useCSS)?$useCSS:true,
       'data-slick-useTransform'=>isset($useTransform)?$useTransform:true,
       'data-slick-variableWidth'=>isset($variableWidth)?$variableWidth:false,
       'data-slick-vertical'=>isset($vertical)?$vertical:false,
        'data-slick-verticalSwiping'=>isset($verticalSwiping)?$verticalSwiping:false,
      );
      $slideroptions = apply_filters('impuls_slick_slider_slideroptions',$slideroptions,$attributes);
      $rueckgabe="";
      if(count($ids)){
        $rueckgabe.='<div class="impuls-slick-slide-container'.($align ? ' align'.$align : '').($className?' '.$className:'').'" ';
        $rueckgabe.='style="height:'.($useBackground ? $sliderHeight.'px;':'auto').'"';
        $rueckgabe.='>';
        $rueckgabe.='<div class="'.$myClassName.'"';
        foreach($slideroptions as $key => $value){
          $rueckgabe.=' '.$key.'="'.string_if_bool($value).'"';
        }    
        $rueckgabe.='>';
        foreach($images as $img){
          $caption = $img['caption'] ? '<div class="wrapper"><div class="slick-slider-block-caption">'.$img['caption'].'</div></div>':'';
          if($useBackground){
            $rueckgabe.='<div class="slick-slider-block-slide" style="background-image:url('.$img['url'].')">'.$caption.'</div>';
          } else {
            $rueckgabe.='<div class="slick-slider-block-slide"><img class="slick-slider-image" alt="'.$img['alt'].'" data-id="'.$img['id'].'" data-lazy="'.$img['url'].'" src="" />'.$caption.'</div>';
          }
        }
        $rueckgabe.='</div>';
        $rueckgabe.='</div>';
      }
      return apply_filters('impuls_slick_slider_block_output',$rueckgabe,$images,$atts);
    }
}

function string_if_bool($val=""){
  if(is_bool($val)){
    return $val ? 'true':'false';
  } elseif(is_null($val)){
    return "";
  } else {
    return $val;
  }
}