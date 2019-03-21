/**
 * External dependencies
 */
const { filter, every, map, some } = lodash;
const { 
	G, 
	Path, 
	SVG,
	DropZone,
	FormFileUpload,
	IconButton,
	PanelBody,
	RangeControl,
	SelectControl,
	ToggleControl,
	Toolbar,
	withNotices,
	Button
} = wp.components;

const { withState } = wp.compose;
import './style.scss';
import './editor.scss';
/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { __, sprintf } = wp.i18n;
const { createBlock,registerBlockType } = wp.blocks;
const {
	BlockControls,
	BlockIcon,
	MediaPlaceholder,
	MediaUpload,
	InspectorControls,
	mediaUpload,
	MediaUploadCheck,
} = wp.editor;
const { createBlobURL } =  wp.blob;


const ALLOWED_MEDIA_TYPES = [ 'image' ];

class MyGalleryEdit extends Component {
	constructor() {
		super( ...arguments );
		this.onSelectImages = this.onSelectImages.bind( this );
		this.toggleUseBackground = this.toggleUseBackground.bind( this );
		this.getUseBackgroundHelp = this.getUseBackgroundHelp.bind(this);
		this.toggleArrows = this.toggleArrows.bind( this );
		this.getArrowsHelp = this.getArrowsHelp.bind(this);
		this.toggleAutoplay = this.toggleAutoplay.bind(this);
		this.setAutoplaySpeed = this.setAutoplaySpeed.bind(this);
		this.toggleDots = this.toggleDots.bind( this );
		this.toggleAdaptiveHeight = this.toggleAdaptiveHeight.bind( this );
		this.toggleCenterMode = this.toggleCenterMode.bind(this);
		this.setCenterPadding = this.setCenterPadding.bind(this);
		this.setCssEase = this.setCssEase.bind(this);
		this.toggleDraggable = this.toggleDraggable.bind(this);
		this.toggleFade = this.toggleFade.bind(this);
		this.toggleFocusOnSelect = this.toggleFocusOnSelect.bind(this);
		this.setEasing = this.setEasing.bind(this);
		this.setEdgeFriction = this.setEdgeFriction.bind(this);
		this.toggleInfinite = this.toggleInfinite.bind(this);
		this.setInitialSlide = this.setInitialSlide.bind(this);
		this.togglePauseOnFocus = this.togglePauseOnFocus.bind(this);
		this.togglePauseOnHover = this.togglePauseOnHover.bind(this);
		this.togglePauseOnDotsHover = this.togglePauseOnDotsHover.bind(this);
		this.setSlidesToShow = this.setSlidesToShow.bind(this);
		this.setSlidesToScroll = this.setSlidesToScroll.bind(this);
		this.setSpeed = this.setSpeed.bind(this);
		this.toggleSwipe = this.toggleSwipe.bind(this);
		this.toggleSwipeToSlide = this.toggleSwipeToSlide.bind(this);
		this.toggleTouchMove = this.toggleTouchMove.bind(this);
		this.setTouchThreshold = this.setTouchThreshold.bind(this);
		this.toggleUseCSS = this.toggleUseCSS.bind(this);
		this.toggleUseTransform = this.toggleUseTransform.bind(this);
		this.toggleVariableWidth = this.toggleVariableWidth.bind(this);
		this.toggleVertical = this.toggleVertical.bind(this);
		this.toggleVerticalSwiping = this.toggleVerticalSwiping.bind(this);
		this.getAdaptiveHeightHelp = this.getAdaptiveHeightHelp.bind(this);
		this.getDotsHelp = this.getDotsHelp.bind(this);
		this.setSliderHeight = this.setSliderHeight.bind( this );
		this.setAttributes = this.setAttributes.bind( this );
		this.getInfiniteHelp = this.getInfiniteHelp.bind(this);
	}
	setSliderHeight(height) {
		this.setAttributes({sliderHeight:height});
	}
	setAttributes( attributes ) {
		jQuery('div[data-block="'+this.props.clientId+'"] .slick-slider-block-slider.slick-initialized').slick('unslick');
		this.props.setAttributes( attributes );
	}
	pickRelevantMediaFiles( image ){
		const imageProps = {
			url: image.url,
			alt: image.alt,
			caption: image.caption,
			id: image.id
		};
		return imageProps;
	}
	pickRelevantIDs(image){
		return image.id;
	}
	onSelectImages( images ) {
		this.setAttributes( {
			images: images.map( ( image ) => this.pickRelevantMediaFiles( image ) ),
			ids : images.map((image) => this.pickRelevantIDs(image))
		} );
	}
	toggleUseBackground() {
		this.setAttributes( { useBackground: ! this.props.attributes.useBackground } );
	}
	getUseBackgroundHelp( checked ) {
		return checked ? __( 'Die Bilder werden als Hintergrundbilder angezeigt und füllen die Slides aus' ) : __( 'Der Slider passt sich an die Bilder an' );
	}
	toggleArrows() {
		this.setAttributes( { arrows: ! this.props.attributes.arrows } );
	}
	getArrowsHelp( checked ) {
		return checked ? __( 'Es werden Vor- und Zurück-Schaltflächen angezeigt' ) : __( 'Es werden keine Vor- und Zurück-Schaltflächen angezeigt' );
	}
	toggleDots() {
		this.setAttributes( { dots: ! this.props.attributes.dots } );
	}
	getDotsHelp( checked ) {
		return checked ? __( 'Es wird eine Slidernavigation unter dem Slider angezeigt.' ) : __( 'Es wird keine Slidernavigation unter dem Slider angezeigt.' );
	}
	toggleAdaptiveHeight(){
		this.setAttributes( { adaptiveHeight: ! this.props.attributes.adaptiveHeight } );
	}
	getAdaptiveHeightHelp( checked ) {
		return checked ? __( 'Der Slider passt seine Höhe je nach Bildhöhe an.' ) : __( 'Der Slider ist so hoch wie das höchste Bild' );
	}
	getInfiniteHelp( checked ) {
		return checked ? __( 'Nach dem letzten Slide wird wieder der erste Slide angezeigt' ) : __( 'Der Slider endet mit dem letzten Slide' );
	}
	toggleAutoplay(){
		this.setAttributes({ autoplay : ! this.props.attributes.autoplay });
	}
	setAutoplaySpeed(value){
		this.setAttributes({ autoplaySpeed : value });
	}
	toggleCenterMode(){
		this.setAttributes({ centerMode : ! this.props.attributes.centerMode });
	}
	setCenterPadding(value){
		this.setAttributes({ centerPadding : value });
	}
	setCssEase(value){
		this.setAttributes({ cssEase : value });
	}
	toggleDraggable(){
		this.setAttributes({ draggable : ! this.props.attributes.draggable });
	}
	toggleFade(){
		this.setAttributes({ fade : ! this.props.attributes.fade });
	}
	toggleFocusOnSelect(){
		this.setAttributes({ focusOnSelect : ! this.props.attributes.focusOnSelect });
	}
	setEasing(value){
		this.setAttributes({ easing : value });
	}
	setEdgeFriction(value){
		this.setAttributes({ edgeFriction : value });
	}
	toggleInfinite(){
		this.setAttributes({ infinite : ! this.props.attributes.infinite });
	}
	setInitialSlide(value){
		this.setAttributes({ initialSlide : value });
	}
	togglePauseOnFocus(){
		this.setAttributes({ pauseOnFocus : ! this.props.attributes.pauseOnFocus });
	}
	togglePauseOnHover(){
		this.setAttributes({ pauseOnHover : ! this.props.attributes.pauseOnHover });
	}
	togglePauseOnDotsHover(){
		this.setAttributes({ pauseOnDotsHover : ! this.props.attributes.pauseOnDotsHover });
	}
	setSlidesToShow(value){
		this.setAttributes({ slidesToShow : value });
	}
	setSlidesToScroll(value){
		this.setAttributes({ slidesToScroll : value });
	}
	setSpeed(value){
		this.setAttributes({ speed : value });
	}
	toggleSwipe(){
		this.setAttributes({ swipe : ! this.props.attributes.swipe });
	}
	toggleSwipeToSlide(){
		this.setAttributes({ swipeToSlide : ! this.props.attributes.swipeToSlide });
	}
	toggleTouchMove(){
		this.setAttributes({ touchMove : ! this.props.attributes.touchMove });
	}
	setTouchThreshold(value){
		this.setAttributes({ touchThreshold : value });
	}
	toggleUseCSS(){
		this.setAttributes({ useCSS : ! this.props.attributes.useCSS });
	}
	toggleUseTransform(){
		this.setAttributes({ useTransform : ! this.props.attributes.useTransform });
	}
	toggleVariableWidth(){
		this.setAttributes({ variableWidth : ! this.props.attributes.variableWidth });
	}
	toggleVertical(){
		this.setAttributes({ vertical : ! this.props.attributes.vertical });
	}
	toggleVerticalSwiping(){
		this.setAttributes({ verticalSwiping : ! this.props.attributes.verticalSwiping });
	}
	componentDidUpdate( prevProps ) {
		const prevAtts = prevProps.attributes;
		const clientId = this.props.clientId;
		if(prevAtts == this.props.attributes){
			
		} else {
			if(this.props.attributes.images.length && jQuery('div[data-block="'+clientId+'"] .slick-slider-block-slider .slick-slider-block-slide').length){
				jQuery('div[data-block="'+this.props.clientId+'"] .slick-slider-block-slider.slick-initialized').slick('unslick');
				jQuery('div[data-block="'+clientId+'"] .slick-slider-block-slider').slick({
					arrows:this.props.attributes.arrows,
					dots:this.props.attributes.dots,
					nextArrow: '<a class="slick-slider-block-next-arrow" href="#"></a>',
					prevArrow: '<a class="slick-slider-block-prev-arrow" href="#"></a>',
					customPaging: function(slider, i) {
						return jQuery('<a class="slider-dot" />').text(i + 1);
					},
					rows: 0,
					adaptiveHeight: this.props.attributes.useBackground ? false : this.props.attributes.adaptiveHeight,
					autoplay: this.props.attributes.autoplay,
					autoplaySpeed: this.props.attributes.autoplaySpeed,
					centerMode: this.props.attributes.centerMode,
					centerPadding: this.props.attributes.centerPadding,
					cssEase: this.props.attributes.cssEase,
					draggable: this.props.attributes.draggable,
					fade: this.props.attributes.fade,
					focusOnSelect: this.props.attributes.focusOnSelect,
					easing: this.props.attributes.easing,
					edgeFriction: this.props.attributes.edgeFriction,
					infinite: this.props.attributes.infinite,
					initialSlide: this.props.attributes.initialSlide,
					pauseOnFocus: this.props.attributes.pauseOnFocus,
					pauseOnHover: this.props.attributes.pauseOnHover,
					pauseOnDotsHover: this.props.attributes.pauseOnDotsHover,
					slidesToShow: this.props.attributes.slidesToShow,
					slidesToScroll: this.props.attributes.slidesToScroll,
					speed:this.props.attributes.speed,
					swipe: this.props.attributes.swipe,
					swipeToSlide: this.props.attributes.swipeToSlide,
					touchMove: this.props.attributes.touchMove,
					touchThreshold: this.props.attributes.touchThreshold,
					useCSS: this.props.attributes.useCSS,
					useTransform: this.props.attributes.useTransform,
					variableWidth: this.props.attributes.useBackground ? false : this.props.attributes.variableWidth,
					vertical: this.props.attributes.vertical,
					verticalSwiping: this.props.attributes.verticalSwiping
				});
			}
		}
	}
	componentDidMount(){
		const clientId = this.props.clientId;
		if(this.props.attributes.ids.length){
			jQuery('div[data-block="'+clientId+'"] .slick-slider-block-slider').slick({
				arrows:this.props.attributes.arrows,
				dots:this.props.attributes.dots,
				nextArrow: '<a class="slick-slider-block-next-arrow" href="#"></a>',
				prevArrow: '<a class="slick-slider-block-prev-arrow" href="#"></a>',
				customPaging: function(slider, i) {
					return jQuery('<a class="slider-dot" />').text(i + 1);
				},
				adaptiveHeight: this.props.attributes.useBackground ? false : this.props.attributes.adaptiveHeight,
				rows: 0,
				autoplay: this.props.attributes.autoplay,
				autoplaySpeed: this.props.attributes.autoplaySpeed,
				centerMode: this.props.attributes.centerMode,
				centerPadding: this.props.attributes.centerPadding,
				cssEase: this.props.attributes.cssEase,
				draggable: this.props.attributes.draggable,
				fade: this.props.attributes.fade,
				focusOnSelect: this.props.attributes.focusOnSelect,
				easing: this.props.attributes.easing,
				edgeFriction: this.props.attributes.edgeFriction,
				infinite: this.props.attributes.infinite,
				initialSlide: this.props.attributes.initialSlide,
				pauseOnFocus: this.props.attributes.pauseOnFocus,
				pauseOnHover: this.props.attributes.pauseOnHover,
				pauseOnDotsHover: this.props.attributes.pauseOnDotsHover,
				slidesToShow: this.props.attributes.slidesToShow,
				slidesToScroll: this.props.attributes.slidesToScroll,
				speed:this.props.attributes.speed,
				swipe: this.props.attributes.swipe,
				swipeToSlide: this.props.attributes.swipeToSlide,
				touchMove: this.props.attributes.touchMove,
				touchThreshold: this.props.attributes.touchThreshold,
				useCSS: this.props.attributes.useCSS,
				useTransform: this.props.attributes.useTransform,
				variableWidth: this.props.attributes.useBackground ? false : this.props.attributes.variableWidth,
				vertical: this.props.attributes.vertical,
				verticalSwiping: this.props.attributes.verticalSwiping
			});
		}
	}
	render() {
		const { attributes, className, noticeOperations, noticeUI,clientId } = this.props;
		const { 
			images, 
			ids, 
			useBackground, 
			arrows, 
			dots, 
			sliderHeight,
			adaptiveHeight,
			autoplay,
			autoplaySpeed,
			centerMode,
			centerPadding,
			cssEase,
			draggable,
			fade,
			focusOnSelect,
			easing,
			edgeFriction,
			infinite,
			initialSlide,
			pauseOnFocus,
			pauseOnHover,
			pauseOnDotsHover,
			slidesToShow,
			slidesToScroll,
			speed,
			swipe,
			swipeToSlide,
			touchMove,
			touchThreshold,
			useCSS,
			useTransform,
			variableWidth,
			vertical,
			verticalSwiping
		} = attributes;
		const myClassName = 'slick-slider-block-slider' +
					(this.props.attributes.useBackground ? ' use-background-image' : '');
		if(ids.length){	
			return 	<Fragment>
						<BlockControls>
							{ !! images.length && (
								<Toolbar>
									<MediaUpload
										onSelect={ this.onSelectImages }
										allowedTypes={ ALLOWED_MEDIA_TYPES }
										value={ ids }
										multiple
										gallery
										render={ ( { open } ) => (
											<IconButton
												className="components-toolbar__control"
												label={ __( 'Edit gallery' ) }
												icon="edit"
												onClick={ open }
											/>
										) }
									/>
								</Toolbar>
							) }
						</BlockControls>
						<InspectorControls>
							<PanelBody title={ __( 'Allgemeine Einstellungen' ) }>
								<ToggleControl
									label={ __( 'Vor-/Zurück-Schaltflächen anzeigen' ) }
									checked={ !! arrows }
									onChange={ this.toggleArrows }
									help={ this.getArrowsHelp }
								/>
								<ToggleControl
									label={ __( 'Slidernavigation anzeigen' ) }
									checked={ !! dots }
									onChange={ this.toggleDots }
									help={ this.getDotsHelp }
								/>
								<ToggleControl
									label={ __( 'Slider Autoplay' ) }
									checked={ !! autoplay }
									onChange={ this.toggleAutoplay }
									/*help={ this.getAutoplayHelp }*/
								/>
								{ !!autoplay && <RangeControl
										label="Anzeigedauer der einzelnen Slides"
										value={ autoplaySpeed }
										onChange= { this.setAutoplaySpeed }
										min={ 100 }
										max={ 15000 }
										step={ 50 }
								/> }
								<ToggleControl
									label={ __( 'Slides überblenden' ) }
									checked={ !! fade }
									onChange={ this.toggleFade }
									/*help={ this.getAutoplayHelp }*/
								/>
								<ToggleControl
									label={ __( '„Unendlicher“ Slider' ) }
									checked={ !! infinite }
									onChange={ this.toggleInfinite }
									help={ this.getInfiniteHelp }
								/>
							</PanelBody>
							<PanelBody title={ __( 'Anzeige-Einstellungen' ) }  initialOpen={false}>
								<RangeControl
										label="Anzahl von Bildern pro Slide"
										value={ slidesToShow }
										onChange= { this.setSlidesToShow }
										min={ 1 }
										max={ ids.length }
								/>
								<RangeControl
										label="Anzahl von Slides beim Scrollvorgang"
										value={ slidesToScroll }
										onChange= { this.setSlidesToScroll }
										min={ 1 }
										max={ ids.length }
								/>
								<RangeControl
										label="Dauer des Slide-Wechsels"
										value={ speed }
										onChange= { this.setSpeed }
										min={ 100 }
										max={ 5000 }
										step={ 50 }
									/>
							</PanelBody>
							<PanelBody title={ __( 'Erweiterte Einstellungen' ) } initialOpen={false}>
								<ToggleControl
									label={ __( 'Bilder als Hintergrundbild verwenden' ) }
									checked={ !! useBackground }
									onChange={ this.toggleUseBackground }
									help={ this.getUseBackgroundHelp }
								/>
								{ !! useBackground && <RangeControl
										label="Höhe des Sliders"
										value={ sliderHeight }
										onChange= { this.setSliderHeight }
										min={ 1 }
										max={ 1000 }
									/> }
								{ !useBackground && <ToggleControl
									label={ __( 'Höhenanpassung' ) }
									checked={ !! adaptiveHeight }
									onChange={ this.toggleAdaptiveHeight }
									help={ this.getAdaptiveHeightHelp }
								/>}
								{!useBackground && <ToggleControl
									label={ __( 'Variable Breite verwenden' ) }
									checked={ !! variableWidth }
									onChange={ this.toggleVariableWidth }
									/*help={ this.getPauseOnFocusHelp }*/
								/>}
								<RangeControl
										label="Erster anzuzeigender Slide"
										value={ initialSlide }
										onChange= { this.setInitialSlide }
										min={ 0 }
										max={ images.length }
									/>
								<ToggleControl
									label={ __( 'Zentrierter Modus' ) }
									checked={ !! centerMode }
									onChange={ this.toggleCenterMode }
									/*help={ this.getPauseOnFocusHelp }*/
								/>
								{ !!centerMode && <RangeControl
										label="Innerer Abstand für Zentrierten Modus"
										value={ centerPadding }
										onChange= { this.setCenterPadding }
										min={ 0 }
										max={ 200 }
									/>}
								
								{ !!autoplay && <ToggleControl
									label={ __( 'Pausieren bei Focus' ) }
									checked={ !! pauseOnFocus }
									onChange={ this.togglePauseOnFocus }
									/*help={ this.getPauseOnFocusHelp }*/
								/> }
								{ !!autoplay && <ToggleControl
									label={ __( 'Pausieren bei Hover' ) }
									checked={ !! pauseOnHover }
									onChange={ this.togglePauseOnHover }
									/*help={ this.getPauseOnHoverHelp }*/
								/> }
								{ !!autoplay && <ToggleControl
									label={ __( 'Pausieren bei Hover über Navigation' ) }
									checked={ !! pauseOnDotsHover }
									onChange={ this.togglePauseOnDotsHover }
									/*help={ this.getPauseOnDotsHoverHelp }*/
								/> }
								<ToggleControl
									label={ __( 'Swipe aktivieren' ) }
									checked={ !! swipe }
									onChange={ this.toggleSwipe }
									/*help={ this.getSwipeHelp }*/
								/>
								{ !!swipe && <ToggleControl
									label={ __( 'Swipe ignoriert slidesToScroll' ) }
									checked={ !! swipeToSlide }
									onChange={ this.toggleSwipeToSlide }
									/*help={ this.getSwipeToSlideHelp }*/
								/> }
								<ToggleControl
									label={ __( 'Drag & Drop mit Maus aktivieren' ) }
									checked={ !! draggable }
									onChange={ this.toggleDraggable }
									/*help={ this.getPauseOnFocusHelp }*/
								/>
								<ToggleControl
									label={ __( 'Wischen mit Touchscreen aktivieren' ) }
									checked={ !! touchMove }
									onChange={ this.toggleTouchMove }
									/*help={ this.getTouchMoveHelp }*/
								/>
								{ !! touchMove && <RangeControl
										label="Widerstand beim Touch-Wischen"
										value={ touchThreshold }
										onChange= { this.setTouchThreshold }
										min={ 1 }
										max={ 20 }
									/> }
								{ ! infinite && <RangeControl
										label="Widerstand beim Erreichen der Ecken"
										value={ edgeFriction }
										onChange= { this.setEdgeFriction }
										min={ 0 }
										max={ 1 }
										step={ 0.01 }
									/> }
								<ToggleControl
									label={ __( 'Slider beim Markieren in den Fokus nehmen' ) }
									checked={ !! focusOnSelect }
									onChange={ this.toggleFocusOnSelect }
									/*help={ this.getPauseOnFocusHelp }*/
								/>
								<ToggleControl
									label={ __( 'CSS-Transitionen verwenden' ) }
									checked={ !! useCSS }
									onChange={ this.toggleUseCSS }
									/*help={ this.getPauseOnFocusHelp }*/
								/>
								<ToggleControl
									label={ __( 'CSS-Transforms verwenden' ) }
									checked={ !! useTransform }
									onChange={ this.toggleUseTransform }
									/*help={ this.getPauseOnFocusHelp }*/
								/>
								{ !! useCSS && <SelectControl
									label="CSS-Easing"
									value={ cssEase }
									options={ [
										{ label: 'Linear', value: 'linear' },
										{ label: 'Ease', value: 'ease' },
										{ label: 'Ease-In', value: 'ease-in' },
										{ label: 'Ease-Out', value: 'ease-out' },
										{ label: 'Ease-In-Out', value: 'ease-in-out' },
									] }
									onChange={ this.setCssEase }
								/> }
								{!useCSS && <SelectControl
									label="jQuery-Easing"
									value={ easing }
									options={ [
										{ label: 'Linear', value: 'linear' },
										{ label: 'Swing', value: 'swing' },
									] }
									onChange={ this.setEasing }
								/> }
							</PanelBody>
						</InspectorControls>
						<div 
							class={ myClassName }
							style = {{
								height: !!useBackground ? sliderHeight:'auto'
							}}
						>
							{ images.map( ( img, index ) => {
								const mycaption = img.caption ? <div className={'slick-slider-block-caption'}>
																	{ img.caption }
																</div> : '';
								const ariaLabel = sprintf( __( 'image %1$d of %2$d in gallery' ), ( index + 1 ), images.length );
								if(!!useBackground){
									return (
										<div 
											className= { "slick-slider-block-slide" }
											style={{
												backgroundImage : 'url('+img.url+')'
											}} 
											ariaLabel = { ariaLabel } 
											data-id={ img.id }>
											{ mycaption }
										</div>
									);
								}
								return (
									<div className={ "slick-slider-block-slide"} >
										<img className="slick-slider-image"
										alt={ img.alt }
										data-id={ img.id }
										src={ img.url }
										ariaLabel = { ariaLabel }
										/>
										{ mycaption }
									</div>
								);
							} ) }
						</div>
					</Fragment>
		} 
		return <Fragment>
					<MediaPlaceholder
							accept="image/*"
							allowedTypes={ ALLOWED_MEDIA_TYPES }
							onSelect = { this.onSelectImages }
							multiple
							labels = { { title: 'Sliderbilder',
										 instructions: 'Ziehen Sie Bilder hierher, laden Sie neue hoch oder wählen Bilder aus der Mediathek aus, die im Slider angezeigt werden sollen.' } }
					/>
				</Fragment>
	}
}

registerBlockType('impuls-additional-blocks/slick-slider',{
	title: __( 'Slick-Slider' ),
	description: __( 'Ein einfacher Bilderslider mit Slick' ),
	icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M20 4v12H8V4h12m0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 9.67l1.69 2.26 2.48-3.1L19 15H9zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z" /></G></SVG>,
	category: 'common',
	keywords: [ __( 'Slick' ), __( 'Slider' ) ],
	attributes: {
		images: {
			type: 'array',
			default: [],
		},
		ids: {
			type: 'array',
			default: [],
		},
		useBackground: {
			type: 'boolean',
			default: false,
		},
		arrows: {
			type: 'boolean',
			default: true,
		},
		dots: {
			type: 'boolean',
			default: true,
		},
		sliderHeight: {
			type: 'integer',
			default: 250
		},
		adaptiveHeight: {
			type: 'boolean',
			default: true,
		},
		autoplay: {
			type: 'boolean',
			default:false,
		},
		autoplaySpeed: {
			type: 'integer',
			default:4000,
		},
		centerMode: {
			type:'boolean',
			default:false,
		},
		centerPadding: {
			type:'integer',
			default:0,
		},
		cssEase: {
			type:'string',
			default:'ease',
		},
		draggable: {
			type:'boolean',
			default:true,
		},
		fade: {
			type:'boolean',
			default:false,
		},
		focusOnSelect: {
			type:'boolean',
			default:false,
		},
		easing: {
			type:'string',
			default:'linear',
		},
		edgeFriction: {
			type:'number',
			default:0.15,
		},
		infinite: {
			type:'boolean',
			default:true,
		},
		initialSlide: {
			type:'integer',
			default:0,
		},
		pauseOnFocus: {
			type:'boolean',
			default:true,
		},
		pauseOnHover: {
			type:'boolean',
			default:true,
		},
		pauseOnDotsHover: {
			type:'boolean',
			default:true,
		},
		slidesToShow:{
			type:'integer',
			default:1,
		},
		slidesToScroll:{
			type:'integer',
			default:1,
		},
		speed:{
			type:'integer',
			default:800,
		},
		swipe: {
			type:'boolean',
			default:true,
		},
		swipeToSlide: {
			type:'boolean',
			default:false,
		},
		touchMove: {
			type:'boolean',
			default:true,
		},
		touchThreshold: {
			type:'integer',
			default:5,
		},
		useCSS: {
			type:'boolean',
			default:true,
		},
		useTransform: {
			type:'boolean',
			default:true,
		},
		variableWidth: {
			type:'boolean',
			default:false,
		},
		vertical: {
			type:'boolean',
			default:false,
		},
		verticalSwiping: {
			type:'boolean',
			default:false,
		},
		alignment: {
            type: 'string',
        },
	},
	supports: {
		align: ['full'],
	},

	edit: MyGalleryEdit, 

	save: function(props){
		return null;
	}
});