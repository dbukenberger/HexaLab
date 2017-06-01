"use strict";

// --------------------------------------------------------------------------------
// UI
// --------------------------------------------------------------------------------
HexaLab.UI.quality_enabled = $('#quality_enabled')
HexaLab.UI.quality_range_slider = $('#quality_range_slider').slider({
    range:true,
    values: [0, 80]
})
HexaLab.UI.quality_min_number = $('#quality_min_number')
HexaLab.UI.quality_max_number = $('#quality_max_number')
HexaLab.UI.quality_plot_dialog = $('<div></div>')

// --------------------------------------------------------------------------------
// Logic
// --------------------------------------------------------------------------------

HexaLab.QualityFilter = function () {
    
    // Ctor
    HexaLab.Filter.call(this, new Module.QualityFilter(), 'Quality');

    // Listener
    var self = this;
    HexaLab.UI.quality_min_number.change(function () {
        self.set_quality_threshold(parseFloat($(this).val()));
        HexaLab.UI.app.update();
    })

    // State
    this.default_settings = {
        threshold: 0.8,
    }
}

HexaLab.QualityFilter.prototype = Object.assign(Object.create(HexaLab.Filter.prototype), {

    // Api
    get_settings: function () {
        return {
            threshold: this.filter.quality_threshold,
        }
    },

    set_settings: function (settings) {
        this.set_quality_threshold(settings.threshold);
    },

    // State
    set_quality_threshold: function (threshold) {
        this.filter.quality_threshold = threshold;
        //HexaLab.UI.quality_threshold.val(threshold);
    },
});

HexaLab.filters.push(new HexaLab.QualityFilter());